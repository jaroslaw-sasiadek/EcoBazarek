import { TextFieldStyle } from "../styles/TextField.styles";

export interface InputTextProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "className"> {
	labelClass?: string;
	spanName: string;
	inputClass?: string;
}

export const InputText = (props: InputTextProps) => {
	const { labelClass, spanName, inputClass, ...other } = props;

	return (
		<label className={"cursor-pointer " + (labelClass || "w-full")}>
			<span className="text-[12px] font-[500]">{spanName}</span>
			<input
				{...other}
				className={`mb-[34px] w-full ${TextFieldStyle.other} ${inputClass}`}
			/>
		</label>
	);
};
