import { useContext } from "react";

import { Content, InputText, InputTextArea, UlErrors } from "../../components";
import { UserContext } from "../../context";
import { HeaderStyles, ButtonStyles } from "../../styles";
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
					<label className="flex flex-col w-[690px]">
						<h1 className={HeaderStyles.brown}>Rejestracja</h1>
						<div className="flex w-full gap-[15px]">
							<InputText
								spanName="Imię*"
								{...getFieldProps("firstName")}
								type="text"
								autoComplete="given-name"
								errorText={states.errors.firstName}
							/>
							<InputText
								spanName="Nazwisko*"
								{...getFieldProps("lastName")}
								type="text"
								autoComplete="family-name"
								errorText={states.errors.lastName}
							/>
						</div>
						<div className="flex w-full gap-[15px]">
							<InputText
								spanName="Email*"
								{...getFieldProps("email")}
								type="email"
								autoComplete="email"
								errorText={states.errors.email}
							/>
							<InputText
								spanName="Telefon*"
								{...getFieldProps("phone")}
								type="phone"
								autoComplete="phone"
								errorText={states.errors.phone}
							/>
						</div>
						<div className="flex w-full gap-[15px]">
							<InputText
								spanName="Hasło*"
								{...getFieldProps("password")}
								type="password"
								autoComplete="new-password"
								errorText={states.errors.password}
							/>
							<InputText
								spanName="Powtórz hasło*"
								{...getFieldProps("repeatPassword")}
								type="password"
								autoComplete="new-password"
								errorText={states.errors.repeatPassword}
							/>
						</div>
						<UlErrors password={states.formData.password} />
					</label>
					<label className="flex flex-col w-[690px]">
						<h2 className="py-[35px] text-[14px] font-[900] text-c1 uppercase">
							Adres i informacje o gospodarstwie
						</h2>
						<InputText
							spanName="Nazwa gospodarstwa*"
							{...getFieldProps("farmName")}
							type="text"
							errorText={states.errors.farmName}
						/>
						<InputTextArea
							spanName="Opis gospodarstwa"
							inputClass={`mb-[34px] block`}
							name="farmDesc"
							{...getFieldProps("farmDesc")}
							errorText={states.errors.farmDesc}
						/>
						<div className="flex w-full gap-[16px]">
							<div className="w-[50%]">
								<InputText
									spanName="Ulica*"
									{...getFieldProps("street")}
									type="text"
									errorText={states.errors.street}
								/>
							</div>
							<div className="flex w-[50%] gap-[16px]">
								<InputText
									spanName="Numer domu*"
									{...getFieldProps("streetNumber")}
									type="text"
									errorText={states.errors.streetNumber}
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
								errorText={states.errors.city}
							/>
							<InputText
								spanName="Kod pocztowy*"
								{...getFieldProps("postCode")}
								type="text"
								errorText={states.errors.postCode}
							/>
						</div>
						<div className="flex gap-[16px]">
							<InputText
								spanName="Województwo*"
								{...getFieldProps("voivodeship")}
								type="text"
								errorText={states.errors.voivodeship}
							/>
							<InputText
								spanName="Powiat*"
								{...getFieldProps("county")}
								type="text"
								errorText={states.errors.county}
							/>
						</div>
						<div className="flex gap-[16px]">
							<InputText
								spanName="Gmina*"
								{...getFieldProps("district")}
								type="text"
								errorText={states.errors.district}
							/>
							<InputText
								spanName="Kraj*"
								{...getFieldProps("country")}
								type="text"
								errorText={states.errors.country}
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
