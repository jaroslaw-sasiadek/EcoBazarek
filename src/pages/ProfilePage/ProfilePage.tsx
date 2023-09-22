import { Link } from "react-router-dom";

import { Content, InputText } from "../../components";
import { ButtonStyles } from "../../styles";
import { useProfileForm } from "./useProfileForm";

export const ProfilePage = () => {
	const { isLoggedIn, submit } = useProfileForm();
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
					<form onSubmit={submit} noValidate>
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
