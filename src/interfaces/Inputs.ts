interface SharedProps {
	labelClass?: string;
	spanName: string;
	inputClass?: string;
	isRequired?: boolean;
	errorText?: string;
}

export interface InputTextProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "className">,
		SharedProps {}

export interface InputTextAreaProps
	extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "className">,
		SharedProps {}

export interface InputsProps
	extends Omit<InputTextProps & InputTextAreaProps, "spanName"> {}
