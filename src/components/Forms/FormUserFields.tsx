import { InputText } from "..";
import { FormFieldsProps } from "../../interfaces";

export const FormUserFields = (props: FormFieldsProps) => {
	const { getFieldProps, errors } = props;
	return (
		<>
			<div className="flex w-full gap-[15px]">
				<InputText
					spanName="Imię"
					{...getFieldProps("firstName")}
					type="text"
					autoComplete="given-name"
					errorText={errors.firstName}
					isRequired={true}
				/>
				<InputText
					spanName="Nazwisko"
					{...getFieldProps("lastName")}
					type="text"
					autoComplete="family-name"
					errorText={errors.lastName}
					isRequired={true}
				/>
			</div>
			<div className="flex w-full gap-[15px]">
				<InputText
					spanName="Email"
					{...getFieldProps("email")}
					type="email"
					autoComplete="email"
					errorText={errors.email}
					isRequired={true}
				/>
				<InputText
					spanName="Telefon"
					{...getFieldProps("phone")}
					type="phone"
					autoComplete="phone"
					errorText={errors.phone}
					isRequired={true}
				/>
			</div>
		</>
	);
};
