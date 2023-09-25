import { useContext } from "react";
import { toast } from "react-toastify";

import { isValid } from "../../../../components/validation";
import { UserContext } from "../../../../context";
import { LoginProps } from "../../../../interfaces";

export const useLoginForm = () => {
	const { isLoggedIn, logIn } = useContext(UserContext);

	function submit(event: React.FormEvent<HTMLFormElement>) {
		const formData = new FormData(event.target as HTMLFormElement);
		const data = Object.fromEntries(formData) as unknown as LoginProps;

		const isEmailValid = isValid.email(data.email);
		if (!isEmailValid) toast.error("Podano nieprawidłowy email!");
		const isPasswordValid = isValid.password(data.password);
		if (!isPasswordValid) toast.error("Podano nieprawidłowe hasło!");

		event.preventDefault();
		isEmailValid && isPasswordValid ? logIn(event, data) : null;
		isLoggedIn ? "" : "";
	}

	return { isLoggedIn, submit };
};
