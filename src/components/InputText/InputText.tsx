import { InputTextProps } from "../../interfaces";
import { SpanStyles, TextFieldStyles } from "../../styles";
import { ErrorText } from "./ErrorText";

export const InputText = (props: InputTextProps) => {
	const {
		labelClass,
		spanName,
		inputClass,
		isRequired = false,
		errorText,
		...other
	} = props;

	return (
		<label className={"mb-[34px] cursor-pointer " + (labelClass || "w-full")}>
			<span className={SpanStyles.input + (errorText ? " text-c7" : "")}>
				{spanName}
				{isRequired ? "*" : null}
			</span>
			<input
				{...other}
				className={`w-full ${
					errorText ? TextFieldStyles.otherError : TextFieldStyles.other
				} ${inputClass}`}
			/>
			{errorText && <ErrorText text={errorText} />}
		</label>
	);
};
