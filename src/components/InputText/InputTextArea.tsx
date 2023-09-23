import { InputTextAreaProps } from "../../interfaces";
import { SpanStyles, TextFieldStyles } from "../../styles";
import { ErrorText } from "./ErrorText";

export const InputTextArea = (props: InputTextAreaProps) => {
	const { labelClass, spanName, inputClass, errorText, ...other } = props;

	return (
		<label className={"mb-[34px] cursor-pointer " + (labelClass || "w-full")}>
			<span className={SpanStyles.input + (errorText ? " text-c7" : "")}>
				{spanName}
			</span>
			<textarea
				{...other}
				className={`h-[130px] w-full ${
					errorText ? TextFieldStyles.otherError : TextFieldStyles.other
				} ${inputClass}`}
			/>
			{errorText && <ErrorText text={errorText} />}
		</label>
	);
};
