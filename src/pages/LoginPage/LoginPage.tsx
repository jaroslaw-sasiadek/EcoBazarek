import { Link, Navigate } from "react-router-dom";

import { Content, InputText } from "../../components";
import { ButtonStyles } from "../../styles";
import { useLoginForm } from "./useLoginForm";

export const LoginPage = () => {
	const { isLoggedIn, submit } = useLoginForm();
	return (
		<Content
			title="EcoBazarek | Logowanie"
			keywords="profil, logowanie, email, hasło, zarejestruj, zaloguj"
			description="Logowanie do naszej aplikacji"
			isLoading={false}
		>
			{isLoggedIn ? (
				<Navigate to="/profil" />
			) : (
				<label className="flex flex-col w-[515px] cursor-pointer">
					<h1 className="pt-[72px] pb-[38px] text-[48px] font-[900] text-c1 uppercase">
						Zaloguj się
					</h1>
					<form className="flex flex-col" onSubmit={submit} noValidate>
						<InputText
							spanName="Email"
							name="email"
							type="email"
							autoComplete="email"
							isRequired={true}
						/>
						<InputText
							spanName="Hasło"
							name="password"
							type="password"
							autoComplete="current-password"
							isRequired={true}
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
