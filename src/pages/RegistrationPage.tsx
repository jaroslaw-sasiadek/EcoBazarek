import { useContext, useState } from "react";

import { UserCreateProps } from "../interfaces/UserProps";
import { UserContext } from "../context/UserContext";
import { Data } from "../API/_Data";
import { Content } from "../components/main/Content";
import { InputText, InputTextProps } from "../components/InputText";
import { TextFieldStyle } from "../styles/TextField.styles";
import { ButtonStyle } from "../styles/Button.styles";

const defaultUserState = (): UserCreateProps => ({
	firstName: "",
	lastName: "",
	email: "",
	phone: "",
	password: "",
	farmName: "",
	farmDesc: "",
	street: "",
	streetNumber: "",
	flatNumber: "",
	city: "",
	postCode: "",
	country: "",
	voivodeship: "",
	county: "",
	district: "",
	repeatPassword: "",
});

export const RegistrationPage = () => {
	const [formData, setFormData] = useState<UserCreateProps>(defaultUserState);
	const { isLoggedIn } = useContext(UserContext);
	const [isDisabled, setIsDisabled] = useState(false);
	const [buttonStyle, setButtonStyle] = useState(ButtonStyle.green.enable);
	const [errors, setErrors] = useState<string[]>([]);

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		setIsDisabled(true);
		setButtonStyle(ButtonStyle.green.disable);
		// const formData = new FormData(event.target as HTMLFormElement);
		// const data = Object.fromEntries(formData) as unknown as UserCreateProps;
		// const response = await Data.Users.PostUsers(event, data);
		const response = await Data.Users.PostUsers(event, formData);
		if (response && response !== "error") setErrors(response);
		if (!response) return;
		setIsDisabled(false);
		setButtonStyle(ButtonStyle.green.enable);
	}

	const getFieldProps = (
		key: keyof UserCreateProps
	): Omit<InputTextProps, "divClass" | "spanName"> => ({
		name: key,
		value: formData[key],
		onChange: (event) =>
			setFormData((previous) => ({
				...previous,
				[key]: event.target.value,
			})),
	});

	const UlErrors = () => {
		return (
			<ul className="text-[12px] font-[500]">
				{errors.length > 0 && (
					<li className="py-[2px]">
						Hasło musi spełniać następujące wymagania:
					</li>
				)}
				{errors.map((error) => (
					<li className="text-[--c7] font-[800] py-[2px]" key={error}>
						{error}
					</li>
				))}
			</ul>
		);
	};

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
							<InputText
								spanName="Imię*"
								{...getFieldProps("firstName")}
								type="text"
								autoComplete="given-name"
								required
							/>
							<InputText
								spanName="Nazwisko*"
								{...getFieldProps("lastName")}
								type="text"
								autoComplete="family-name"
								required
							/>
						</div>
						<div className="flex w-full gap-[15px]">
							<InputText
								spanName="Email*"
								{...getFieldProps("email")}
								type="email"
								autoComplete="email"
								required
							/>
							<InputText
								spanName="Telefon*"
								{...getFieldProps("phone")}
								type="phone"
								autoComplete="phone"
								required
							/>
						</div>
						<div className="flex w-full gap-[15px]">
							<InputText
								spanName="Hasło*"
								{...getFieldProps("password")}
								type="password"
								required
							/>
							<InputText
								spanName="Powtórz hasło*"
								{...getFieldProps("repeatPassword")}
								type="password"
								required
							/>
						</div>
						<UlErrors />
						<h2 className="py-[35px] text-[14px] font-[900] text-[--c1] uppercase">
							Adres i informacje o gospodarstwie
						</h2>
						<InputText
							spanName="Nazwa gospodarstwa*"
							{...getFieldProps("farmName")}
							type="text"
							required
						/>
						<span className="text-[12px] font-[500]">Opis gospodarstwa</span>
						<textarea
							className={`mb-[34px] w-full block ${TextFieldStyle.area} h-[130px]`}
							name="farmDesc"
						/>
						<div className="flex w-full gap-[16px]">
							<div className="w-[50%]">
								<InputText
									spanName="Ulica*"
									{...getFieldProps("street")}
									type="text"
									required
								/>
							</div>
							<div className="flex w-[50%] gap-[16px]">
								<InputText
									spanName="Numer domu*"
									{...getFieldProps("streetNumber")}
									type="text"
									required
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
								required
							/>
							<InputText
								spanName="Kod pocztowy*"
								{...getFieldProps("postCode")}
								type="text"
								required
							/>
						</div>
						<div className="flex gap-[16px]">
							<InputText
								spanName="Województwo*"
								{...getFieldProps("voivodeship")}
								type="text"
								required
							/>
							<InputText
								spanName="Powiat*"
								{...getFieldProps("county")}
								type="text"
								required
							/>
						</div>
						<div className="flex gap-[16px]">
							<InputText
								spanName="Gmina*"
								{...getFieldProps("district")}
								type="text"
								required
							/>
							<InputText
								spanName="Kraj*"
								{...getFieldProps("country")}
								type="text"
								required
							/>
						</div>
						<div className="mt-[30px] flex w-full justify-end">
							<input
								className={ButtonStyle.text.enable}
								name="reset"
								type="reset"
								value="Reset"
							/>
							<input
								className={buttonStyle}
								name="save"
								type="submit"
								value="Zapisz"
								disabled={isDisabled}
							/>
						</div>
					</form>
				</label>
			)}
		</Content>
	);
};
