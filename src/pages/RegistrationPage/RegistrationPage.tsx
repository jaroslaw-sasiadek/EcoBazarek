import { useContext } from "react";
import { Navigate } from "react-router-dom";

import {
	Content,
	FormButtons,
	FormFarmFields,
	FormUserFields,
	UlErrors,
} from "../../components";
import { UserContext } from "../../context";
import { HeaderStyles } from "../../styles";
import { useRegistrationForm } from "./useRegistrationForm";
import { UserCreateProps, UserProfileProps } from "../../interfaces";
import { FormPasswordFields } from "../../components/Forms";

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
				<Navigate to="/profil" />
			) : (
				<form onSubmit={handles.submit} onReset={handles.reset} noValidate>
					<label className="flex flex-col w-[690px]">
						<h1 className={HeaderStyles.brown}>Rejestracja</h1>
						<FormUserFields
							getFieldProps={(key: keyof UserCreateProps) =>
								getFieldProps(key) as UserProfileProps
							}
							errors={states.errors}
						/>
						<FormPasswordFields
							getFieldProps={(key: keyof UserCreateProps) =>
								getFieldProps(key) as UserProfileProps
							}
							errors={states.errors}
						/>
						<UlErrors password={states.formData.password} />
					</label>
					<label className="flex flex-col w-[690px]">
						<FormFarmFields
							getFieldProps={(key: keyof UserCreateProps) =>
								getFieldProps(key) as UserProfileProps
							}
							errors={states.errors}
						/>
						<FormButtons
							buttonStyle={states.buttonStyle}
							isDisabled={states.isDisabled}
						/>
					</label>
				</form>
			)}
		</Content>
	);
};
