import { useContext } from "react";
import { Link } from "react-router-dom";

import { InputText } from "../components/InputText";
import { Content } from "../components/main/Content";
import { UserContext } from "../context/UserContext";
import { LoginProps } from "../interfaces/LoginProps";
import { ButtonStyle } from "../styles/Button.styles";

export const ProfilePage = () => {
	const { isLoggedIn, logIn } = useContext(UserContext);

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		const formData = new FormData(event.target as HTMLFormElement);
		const data = Object.fromEntries(formData) as unknown as LoginProps;
		logIn(event, data);
	}

	return (
		<Content
			title="EcoBazarek | Profil użytkownika"
			keywords="profil, logowanie, email, hasło, zarejestruj, zaloguj"
			description="Profil użytkownika naszej aplikacji"
			isLoading={false}
		>
			{isLoggedIn ? (
				<h1 className="pt-[72px] pb-[38px] text-[48px] font-[900] text-[--c1] uppercase">
					Jesteś zalogowany!
				</h1>
			) : (
				<label className="flex flex-col w-[515px] cursor-pointer">
					<h1 className="pt-[72px] pb-[38px] text-[48px] font-[900] text-[--c1] uppercase">
						Zaloguj się
					</h1>
					<form onSubmit={handleSubmit}>
						<InputText
							spanName="Email*"
							name="email"
							type="email"
							autoComplete="email"
							required
						/>
						<InputText
							spanName="Hasło*"
							name="password"
							type="password"
							autoComplete="current-password"
							required
						/>
						<div className="mt-[30px] flex w-full justify-end">
							<Link
								className={ButtonStyle.text.enable + " items-center"}
								to="/rejestracja"
							>
								Zarejestruj się
							</Link>
							<input
								className={ButtonStyle.green.enable}
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
