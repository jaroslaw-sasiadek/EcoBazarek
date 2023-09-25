import { ErrorText } from "../../../components/InputText/ErrorText";
import { InputTextProps } from "../../../interfaces";
import { SpanStyles, TextFieldStyles } from "../../../styles";

export const InputTextList = (props: InputTextProps) => {
	const {
		labelClass,
		spanName,
		inputClass,
		isRequired = false,
		errorText,
		list,
		...other
	} = props;

	return (
		<label className={"mb-[34px] cursor-pointer " + (labelClass || "w-full")}>
			<span className={SpanStyles.input + (errorText ? " text-c7" : "")}>
				{spanName}
				{isRequired ? "*" : null}
			</span>
			<input
				list={list}
				{...other}
				className={`w-full ${
					errorText ? TextFieldStyles.otherError : TextFieldStyles.other
				} ${inputClass}`}
			/>
			{errorText && <ErrorText text={errorText} />}
		</label>
	);
};
