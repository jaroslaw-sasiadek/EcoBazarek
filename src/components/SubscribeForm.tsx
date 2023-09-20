import { FormEvent, useState } from "react";

import { Data } from "../API/_Data";
import { ButtonStyle } from "../styles/Button.styles";
import { TextFieldStyle } from "../styles/TextField.styles";

export function SubscribeForm() {
	const [email, setEmail] = useState("");
	const [isDisabled, setIsDisabled] = useState(false);
	const [buttonStyle, setButtonStyle] = useState(ButtonStyle.green.enable);
	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		setIsDisabled(true);
		setButtonStyle(ButtonStyle.green.disable);
		(await Data.Others.Subscribe(event, email)) === "error"
			? (setIsDisabled(false), setButtonStyle(ButtonStyle.green.enable))
			: null;
	}
	return (
		<form
			className="flex justify-center gap-[26px] mt-[30px] mb-[16px]"
			onSubmit={handleSubmit}
		>
			<input
				className={TextFieldStyle.footer}
				name="subscribe input"
				value={email}
				onChange={(event) => {
					setEmail(event.target.value);
				}}
				type="email"
				required
				disabled={isDisabled}
				autoComplete="email"
			/>
			<input
				className={buttonStyle}
				name="subscribe submit"
				type="submit"
				value="SUBSKRYBUJ"
				disabled={isDisabled}
			/>
		</form>
	);
}
