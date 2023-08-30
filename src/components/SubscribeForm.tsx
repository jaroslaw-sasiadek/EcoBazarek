import { useState } from "react";
import { toast } from "react-toastify";

import { handleData } from "./data";

export function SubscribeForm() {
	const [email, setEmail] = useState("");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		handleData.subscribe(email);
		toast.success("Dziękujemy za subskrypcję!", { position: "bottom-center" });
	};

	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	return (
		<form
			className="flex justify-center gap-[26px] mt-[30px] mb-[16px]"
			onSubmit={handleSubmit}
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
