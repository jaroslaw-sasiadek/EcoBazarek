import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

import { Data } from "../API/_Data";
import { ButtonStyle } from "../styles/Button.styles";
import { TextFieldStyle } from "../styles/TextField.styles";
import { validateEmail } from "./validation/validateEmail";

export function SubscribeForm() {
	const [email, setEmail] = useState("");
	const [isDisabled, setIsDisabled] = useState(false);
	const [buttonStyle, setButtonStyle] = useState(ButtonStyle.green.enable);

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		const isEmailValid = validateEmail(event, email);
		if (isEmailValid) {
			setIsDisabled(true);
			setButtonStyle(ButtonStyle.green.disable);
			(await Data.Others.Subscribe(event, email)) === "error"
				? (setIsDisabled(false), setButtonStyle(ButtonStyle.green.enable))
				: null;
		} else toast.error("Podano nieprawidłowy email");
	}
	return (
		<form
			className="flex justify-center gap-[26px] mt-[30px] mb-[16px]"
			onSubmit={handleSubmit}
			noValidate
		>
			<input
				className={TextFieldStyle.footer}
				name="subscribe"
				value={email}
				onChange={(event) => {
					setEmail(event.target.value);
				}}
				type="email"
				disabled={isDisabled}
				autoComplete="email"
			/>
			<input
				className={buttonStyle}
				name="submit"
				type="submit"
				value="SUBSKRYBUJ"
				disabled={isDisabled}
			/>
		</form>
	);
}
