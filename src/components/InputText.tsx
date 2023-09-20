import { TextFieldStyle } from "../styles/TextField.styles";

export interface InputTextProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "className"> {
	spanName: string;
	inputClass?: string;
}

export const InputText = (props: InputTextProps) => {
	const { spanName, inputClass, ...other } = props;

	return (
		<>
			<span className="text-[12px] font-[500]">{spanName}</span>
			<input
				{...other}
				className={`mb-[34px] w-full ${TextFieldStyle.other} ${inputClass}`}
			/>
		</>
	);
};
