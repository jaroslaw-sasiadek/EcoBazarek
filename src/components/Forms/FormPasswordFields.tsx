import { InputText } from "..";
import { FormFieldsProps } from "../../interfaces";

export const FormPasswordFields = (props: FormFieldsProps) => {
	const { getFieldProps, errors } = props;
	return (
		<>
			<div className="flex w-full gap-[15px]">
				<InputText
					spanName="Hasło"
					{...getFieldProps("password")}
					type="password"
					autoComplete="new-password"
					errorText={errors.password}
					isRequired={true}
				/>
				<InputText
					spanName="Powtórz hasło"
					{...getFieldProps("repeatPassword")}
					type="password"
					autoComplete="new-password"
					errorText={errors.repeatPassword}
				/>
			</div>
		</>
	);
};
