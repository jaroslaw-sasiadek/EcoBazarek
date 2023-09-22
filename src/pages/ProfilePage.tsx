import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { Content, InputText } from "../components";
import { isValid } from "../components/validation";
import { UserContext } from "../context";
import { LoginProps } from "../interfaces";
import { ButtonStyles } from "../styles";

export const ProfilePage = () => {
	const { isLoggedIn, logIn } = useContext(UserContext);

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		const formData = new FormData(event.target as HTMLFormElement);
		const data = Object.fromEntries(formData) as unknown as LoginProps;

		const isEmailValid = isValid.email(data.email);
		const isPasswordValid = isValid.password(data.password);

		isEmailValid ? null : toast.error("Podano nieprawidłowy email!");
		isPasswordValid ? null : toast.error("Podano nieprawidłowe hasło!");

		event.preventDefault();
		isEmailValid && isPasswordValid ? logIn(event, data) : null;
	}
	return (
		<Content
			title="EcoBazarek | Profil użytkownika"
			keywords="profil, logowanie, email, hasło, zarejestruj, zaloguj"
			description="Profil użytkownika naszej aplikacji"
			isLoading={false}
		>
			{isLoggedIn ? (
				<h1 className="pt-[72px] pb-[38px] text-[48px] font-[900] text-c1 uppercase">
					Jesteś zalogowany!
				</h1>
			) : (
				<label className="flex flex-col w-[515px] cursor-pointer">
					<h1 className="pt-[72px] pb-[38px] text-[48px] font-[900] text-c1 uppercase">
						Zaloguj się
					</h1>
					<form onSubmit={handleSubmit} noValidate>
						<InputText
							spanName="Email*"
							name="email"
							type="email"
							autoComplete="email"
						/>
						<InputText
							spanName="Hasło*"
							name="password"
							type="password"
							autoComplete="current-password"
						/>
						<div className="mt-[30px] flex w-full justify-end">
							<Link
								className={ButtonStyles.text.enable + " items-center"}
								to="/rejestracja"
							>
								Zarejestruj się
							</Link>
							<input
								className={ButtonStyles.green.enable}
								name="submit"
								type="submit"
								value="Zaloguj"
							/>
						</div>
					</form>
				</label>
			)}
		</Content>
	);
};
