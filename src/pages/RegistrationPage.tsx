import { useContext } from "react";

import { UserCreateProps } from "../interfaces/UserProps";
import { UserContext } from "../context/UserContext";
import { Data } from "../API/_Data";
import { Content } from "../components/main/Content";
import { InputText } from "../components/InputText";
import { TextFieldStyle } from "../styles/TextField.styles";
import { ButtonStyle } from "../styles/Button.styles";

export const RegistrationPage = () => {
	const { isLoggedIn } = useContext(UserContext);

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		const formData = new FormData(event.target as HTMLFormElement);
		const data = Object.fromEntries(formData) as unknown as UserCreateProps;
		Data.Users.PostUsers(event, data);
	}

	return (
		<Content
			title="EcoBazarek | Rejestracja"
			keywords="profil, rejestracja, email, hasło, zarejestruj, zaloguj"
			description="Zarejestruj się w naszej aplikacji"
			isLoading={false}
		>
			{isLoggedIn ? (
				<h1 className="pt-[72px] pb-[38px] text-[48px] font-[900] text-[--c1] uppercase">
					Jesteś zalogowany!
				</h1>
			) : (
				<label className="flex flex-col w-[690px] cursor-pointer">
					<h1 className="pt-[72px] pb-[38px] text-[48px] font-[900] text-[--c1] uppercase">
						Rejestracja
					</h1>
					<form onSubmit={handleSubmit}>
						<div className="flex w-full gap-[15px]">
							<div className="w-full">
								<InputText
									spanName="Imię*"
									name="firstName"
									type="text"
									autoComplete="given-name"
									required
								/>
							</div>
							<div className="w-full">
								<InputText
									spanName="Nazwisko*"
									name="lastName"
									type="text"
									autoComplete="family-name"
									required
								/>
							</div>
						</div>
						<div className="flex w-full gap-[15px]">
							<div className="w-full">
								<InputText
									spanName="Email*"
									name="email"
									type="email"
									autoComplete="email"
									required
								/>
							</div>
							<div className="w-full">
								<InputText
									spanName="Telefon*"
									name="phone"
									type="phone"
									autoComplete="phone"
									required
								/>
							</div>
						</div>
						<div className="flex w-full gap-[15px]">
							<div className="w-full">
								<InputText
									spanName="Hasło*"
									name="password"
									type="password"
									required
								/>
							</div>
							<div className="w-full">
								<InputText
									spanName="Powtórz hasło*"
									name="repeatPassword"
									type="password"
									required
								/>
							</div>
						</div>
						<h2 className="py-[35px] text-[14px] font-[900] text-[--c1] uppercase">
							Adres i informacje o gospodarstwie
						</h2>
						<div className="w-full">
							<InputText
								spanName="Nazwa gospodarstwa*"
								name="farmName"
								type="text"
								required
							/>
						</div>
						<span className="text-[12px] font-[500]">Opis gospodarstwa</span>
						<textarea
							className={`mb-[34px] w-full block ${TextFieldStyle.area} h-[130px]`}
							name="farmDesc"
						/>
						<div className="flex w-full gap-[16px]">
							<div className="w-[50%]">
								<InputText
									spanName="Ulica*"
									name="street"
									type="text"
									required
								/>
							</div>
							<div className="flex w-[50%] gap-[16px]">
								<div>
									<InputText
										spanName="Numer domu*"
										name="streetNumber"
										type="text"
										required
									/>
								</div>
								<div>
									<InputText
										spanName="Numer mieszkania"
										name="flatNumber"
										type="text"
									/>
								</div>
							</div>
						</div>
						<div className="flex gap-[16px]">
							<div className="w-full">
								<InputText
									spanName="Miasto/ Wieś*"
									name="city"
									type="text"
									required
								/>
							</div>
							<div className="w-full">
								<InputText
									spanName="Kod pocztowy*"
									name="postCode"
									type="text"
									required
								/>
							</div>
						</div>
						<div className="flex gap-[16px]">
							<div className="w-full">
								<InputText
									spanName="Województwo*"
									name="voivodeship"
									type="text"
									required
								/>
							</div>
							<div className="w-full">
								<InputText
									spanName="Powiat*"
									name="county"
									type="text"
									required
								/>
							</div>
						</div>
						<div className="flex gap-[16px]">
							<div className="w-full">
								<InputText
									spanName="Gmina*"
									name="district"
									type="text"
									required
								/>
							</div>
							<div className="w-full">
								<InputText
									spanName="Kraj*"
									name="country"
									type="text"
									required
								/>
							</div>
						</div>
						<div className="mt-[30px] flex w-full justify-end">
							<input
								className={ButtonStyle.text.enable}
								name="reset"
								type="reset"
								value="Reset"
							/>
							<input
								className={ButtonStyle.green.enable}
								name="save"
								type="submit"
								value="Zapisz"
							/>
						</div>
					</form>
				</label>
			)}
		</Content>
	);
};
