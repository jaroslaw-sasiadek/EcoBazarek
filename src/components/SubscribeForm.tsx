import { useState } from "react";

import { Data } from "../API/_Data";

export function SubscribeForm() {
	const [email, setEmail] = useState("");

	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	return (
		<form
			className="flex justify-center gap-[26px] mt-[30px] mb-[16px]"
			onSubmit={(event) => Data.Others.Subscribe(event, email)}
		>
			<input
				className="w-[420px] bg-[--c2]"
				value={email}
				onChange={handleInput}
				type="email"
				required
			/>
			<input
				className="text-[16px] w-[134px] bg-[--c3] text-[--c5]"
				type="submit"
				value="SUBSKRYBUJ"
			/>
		</form>
	);
}
