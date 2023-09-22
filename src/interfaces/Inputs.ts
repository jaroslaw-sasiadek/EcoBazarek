export interface InputTextProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "className"> {
	labelClass?: string;
	spanName: string;
	inputClass?: string;
}

export interface InputTextAreaProps
	extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "className"> {
	labelClass?: string;
	spanName: string;
	inputClass?: string;
}
