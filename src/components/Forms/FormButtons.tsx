import { FormButtonsProps } from "../../interfaces";
import { ButtonStyles } from "../../styles";

export const FormButtons = (props: FormButtonsProps) => {
	const { children, buttonStyle, isDisabled = false } = props;
	return (
		<>
			<div className="relative mt-[30px] flex w-full justify-end">
				{children}
				<input
					className={ButtonStyles.text.enable}
					name="reset"
					type="reset"
					value="Reset"
				/>
				<input
					className={buttonStyle}
					name="submit"
					type="submit"
					value="Zapisz"
					disabled={isDisabled}
				/>
			</div>
		</>
	);
};
