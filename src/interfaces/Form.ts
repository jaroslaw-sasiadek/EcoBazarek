import { ResponseErrors, UserCreateProps, UserProfileProps } from ".";

export interface FormFieldsProps {
	getFieldProps: (key: keyof UserCreateProps) => UserProfileProps;
	errors: { [key: string]: string };
}

export interface FormButtonsProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	buttonStyle: string;
	isDisabled?: boolean;
}

export interface FormState<T> {
	data: T;
	setData: React.Dispatch<React.SetStateAction<T>>;
	setErrors: React.Dispatch<React.SetStateAction<ResponseErrors>>;
}
