import { useContext } from "react";

import { Content, InputText, InputTextArea } from "../../components";
import { UserContext } from "../../context";
import { HeaderStyles, ButtonStyles } from "../../styles";
import { UlErrors } from "./UlErrors";
import { useRegistrationForm } from "./useRegistrationForm";

export const RegistrationPage = () => {
	const { getFieldProps, states, handles } = useRegistrationForm();
	const { isLoggedIn } = useContext(UserContext);
	return (
		<Content
			title="EcoBazarek | Rejestracja"
			keywords="profil, rejestracja, email, hasło, zarejestruj, zaloguj"
			description="Zarejestruj się w naszej aplikacji"
			isLoading={false}
		>
			{isLoggedIn ? (
				<h1 className={HeaderStyles.brown}>Jesteś zalogowany!</h1>
			) : (
				<form onSubmit={handles.submit} onReset={handles.reset} noValidate>
					<label className="flex flex-col w-[690px] cursor-pointer">
						<h1 className={HeaderStyles.brown}>Rejestracja</h1>
						<div className="flex w-full gap-[15px]">
							<InputText
								spanName="Imię*"
								{...getFieldProps("firstName")}
								type="text"
								autoComplete="given-name"
							/>
							<InputText
								spanName="Nazwisko*"
								{...getFieldProps("lastName")}
								type="text"
								autoComplete="family-name"
							/>
						</div>
						<div className="flex w-full gap-[15px]">
							<InputText
								spanName="Email*"
								{...getFieldProps("email")}
								type="email"
								autoComplete="email"
							/>
							<InputText
								spanName="Telefon*"
								{...getFieldProps("phone")}
								type="phone"
								autoComplete="phone"
							/>
						</div>
						<div className="flex w-full gap-[15px]">
							<InputText
								spanName="Hasło*"
								{...getFieldProps("password")}
								type="password"
							/>
							<InputText
								spanName="Powtórz hasło*"
								{...getFieldProps("repeatPassword")}
								type="password"
							/>
						</div>
						<UlErrors errors={states.errors} />
					</label>
					<label className="flex flex-col w-[690px] cursor-pointer">
						<h2 className="py-[35px] text-[14px] font-[900] text-c1 uppercase">
							Adres i informacje o gospodarstwie
						</h2>
						<InputText
							spanName="Nazwa gospodarstwa*"
							{...getFieldProps("farmName")}
							type="text"
						/>
						<InputTextArea
							spanName="Opis gospodarstwa"
							inputClass={`mb-[34px] block`}
							name="farmDesc"
							{...getFieldProps("farmDesc")}
						/>
						<div className="flex w-full gap-[16px]">
							<div className="w-[50%]">
								<InputText
									spanName="Ulica*"
									{...getFieldProps("street")}
									type="text"
								/>
							</div>
							<div className="flex w-[50%] gap-[16px]">
								<InputText
									spanName="Numer domu*"
									{...getFieldProps("streetNumber")}
									type="text"
								/>
								<InputText
									spanName="Numer mieszkania"
									{...getFieldProps("flatNumber")}
									type="text"
								/>
							</div>
						</div>
						<div className="flex gap-[16px]">
							<InputText
								spanName="Miasto/ Wieś*"
								{...getFieldProps("city")}
								type="text"
							/>
							<InputText
								spanName="Kod pocztowy*"
								{...getFieldProps("postCode")}
								type="text"
							/>
						</div>
						<div className="flex gap-[16px]">
							<InputText
								spanName="Województwo*"
								{...getFieldProps("voivodeship")}
								type="text"
							/>
							<InputText
								spanName="Powiat*"
								{...getFieldProps("county")}
								type="text"
							/>
						</div>
						<div className="flex gap-[16px]">
							<InputText
								spanName="Gmina*"
								{...getFieldProps("district")}
								type="text"
							/>
							<InputText
								spanName="Kraj*"
								{...getFieldProps("country")}
								type="text"
							/>
						</div>
						<div className="mt-[30px] flex w-full justify-end">
							<input
								className={ButtonStyles.text.enable}
								name="reset"
								type="reset"
								value="Reset"
							/>
							<input
								className={states.buttonStyle}
								name="save"
								type="submit"
								value="Zapisz"
								disabled={states.isDisabled}
							/>
						</div>
					</label>
				</form>
			)}
		</Content>
	);
};
