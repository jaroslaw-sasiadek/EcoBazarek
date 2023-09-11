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
				className="w-[420px] h-[42px] px-[10px] bg-[--c2] rounded-[2px] text-[18px] font-[500] text-[--c1]"
				value={email}
				onChange={handleInput}
				type="email"
				required
			/>
			<input
				className=" w-[134px] bg-[--c3] rounded-[2px] text-[14px] text-[--c5]"
				type="submit"
				value="SUBSKRYBUJ"
			/>
		</form>
	);
}
