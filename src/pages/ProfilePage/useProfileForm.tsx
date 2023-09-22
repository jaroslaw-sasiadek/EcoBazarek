import { useContext } from "react";
import { toast } from "react-toastify";

import { isValid } from "../../components/validation";
import { UserContext } from "../../context";
import { LoginProps } from "../../interfaces";

export const useProfileForm = () => {
	const { isLoggedIn, logIn } = useContext(UserContext);

	function submit(event: React.FormEvent<HTMLFormElement>) {
		const formData = new FormData(event.target as HTMLFormElement);
		const data = Object.fromEntries(formData) as unknown as LoginProps;

		const isEmailValid = isValid.email(data.email);
		const isPasswordValid = isValid.password(data.password);

		isEmailValid ? null : toast.error("Podano nieprawidłowy email!");
		isPasswordValid ? null : toast.error("Podano nieprawidłowe hasło!");

		event.preventDefault();
		isEmailValid && isPasswordValid ? logIn(event, data) : null;
	}

	return { isLoggedIn, submit };
};
