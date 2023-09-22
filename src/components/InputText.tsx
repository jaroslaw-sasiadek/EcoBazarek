import { InputTextProps } from "../interfaces";
import { SpanStyles, TextFieldStyles } from "../styles";

export const InputText = (props: InputTextProps) => {
	const { labelClass, spanName, inputClass, ...other } = props;

	return (
		<label className={"cursor-pointer " + (labelClass || "w-full")}>
			<span className={SpanStyles.input}>{spanName}</span>
			<input
				{...other}
				className={`mb-[34px] w-full ${TextFieldStyles.other} ${inputClass}`}
			/>
		</label>
	);
};
