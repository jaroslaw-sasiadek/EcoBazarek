import { InputText, UlErrors, FormButtons } from "../../../../components";
import { ButtonStyles } from "../../../../styles";
import { usePasswordForm } from "./usePasswordForm";

export const PasswordForm = () => {
	const { getFieldProps, formData, handles, errors } = usePasswordForm();
	return (
		<form onSubmit={handles.submitForm} onReset={handles.resetForm} noValidate>
			<label className="flex flex-col w-[515px]">
				<div className="flex flex-col w-full">
					<InputText
						spanName="Stare hasło"
						{...getFieldProps("oldPassword")}
						type="password"
						autoComplete="oldPassword"
						errorText={errors.oldPassword}
						isRequired={true}
					/>
					<InputText
						spanName="Nowe hasło"
						{...getFieldProps("newPassword")}
						type="password"
						autoComplete="new-password"
						errorText={errors.newPassword}
						isRequired={true}
					/>
					<InputText
						spanName="Powtórz nowe hasło"
						{...getFieldProps("repeatNewPassword")}
						type="password"
						autoComplete="new-password"
						errorText={errors.repeatNewPassword}
						isRequired={true}
					/>
				</div>
				<UlErrors password={formData.newPassword} />
				<div className="flex">
					<FormButtons
						children={
							<input
								className={ButtonStyles.red + " absolute left-0"}
								onClick={handles.deleteUser}
								name="delete"
								type="button"
								value="Usuń konto"
							/>
						}
						buttonStyle={ButtonStyles.green.enable}
					/>
				</div>
			</label>
		</form>
	);
};
