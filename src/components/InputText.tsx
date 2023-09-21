import { TextFieldStyle } from "../styles/TextField.styles";

export interface InputTextProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "className"> {
	divClass?: string;
	spanName: string;
	inputClass?: string;
}

export const InputText = (props: InputTextProps) => {
	const { divClass, spanName, inputClass, ...other } = props;

	return (
		<div className={divClass || "w-full"}>
			<span className="text-[12px] font-[500]">{spanName}</span>
			<input
				{...other}
				className={`mb-[34px] w-full ${TextFieldStyle.other} ${inputClass}`}
			/>
		</div>
	);
};
