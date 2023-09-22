import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

import { Data } from "../../API";
import { ButtonStyles, TextFieldStyles } from "../../styles";
import { isValid } from "../validation";

export function SubscribeForm() {
	const [email, setEmail] = useState("");
	const [isDisabled, setIsDisabled] = useState(false);
	const [buttonStyle, setButtonStyle] = useState(ButtonStyles.green.enable);

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		const isEmailValid = isValid.email(email);
		if (isEmailValid) {
			setIsDisabled(true);
			setButtonStyle(ButtonStyles.green.disable);
			(await Data.Others.Subscribe(event, email)) === "error"
				? (setIsDisabled(false), setButtonStyle(ButtonStyles.green.enable))
				: null;
		} else toast.error("Podano nieprawidłowy email!");
	}
	return (
		<form
			className="mt-[30px] mb-[16px] flex justify-center gap-[26px]"
			onSubmit={handleSubmit}
			noValidate
		>
			<input
				className={TextFieldStyles.footer}
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
