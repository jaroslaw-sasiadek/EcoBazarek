import { InputTextAreaProps } from "../interfaces";
import { SpanStyles, TextFieldStyles } from "../styles";

export const InputTextArea = (props: InputTextAreaProps) => {
	const { labelClass, spanName, inputClass, ...other } = props;

	return (
		<label className={"cursor-pointer " + (labelClass || "w-full")}>
			<span className={SpanStyles.input}>{spanName}</span>
			<textarea
				{...other}
				className={`mb-[34px] h-[130px] w-full ${TextFieldStyles.area} ${inputClass}`}
			/>
		</label>
	);
};
