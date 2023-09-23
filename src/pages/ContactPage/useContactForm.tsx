import { useState } from "react";

import { Data } from "../../API";
import {
	ContactProps,
	InputTextAreaProps,
	InputTextProps,
	ResponseErrors,
	ResponseItem,
} from "../../interfaces";
import { defaultContactState } from "./utils";
import { ButtonStyles } from "../../styles";

export const useContactForm = () => {
	const [formData, setFormData] = useState<ContactProps>(defaultContactState);
	const [isDisabled, setIsDisabled] = useState(false);
	const [buttonStyle, setButtonStyle] = useState(ButtonStyles.green.enable);
	const [errors, setErrors] = useState<ResponseErrors>({});

	function reset() {
		setFormData(defaultContactState);
	}

	async function submit(event: React.FormEvent<HTMLFormElement>) {
		setIsDisabled(true);
		setButtonStyle(ButtonStyles.green.disable);

		event.preventDefault();
		const response = await Data.Others.Contact(event, formData);

		if (response && response !== "error") {
			const objectErrors = response.reduce(
				(previous: ResponseErrors, current: ResponseItem) => {
					previous[current.path] = current.message;
					return previous;
				},
				{}
			);
			console.log(objectErrors);
			setErrors(objectErrors);
		}
		if (!response) return;
		setIsDisabled(false);
		setButtonStyle(ButtonStyles.green.enable);
	}

	const getFieldProps = (
		key: keyof ContactProps
	): Omit<InputTextProps & InputTextAreaProps, "spanName"> => ({
		name: key,
		value: formData[key],
		onChange: (event) => {
			setErrors((previous) => {
				const current = structuredClone(previous);
				delete current[key];
				return current;
			});
			setFormData((previous) => ({
				...previous,
				[key]: event.target.value,
			}));
		},
	});

	const handles = { reset, submit };
	const states = {
		errors,
		buttonStyle,
		isDisabled,
	};

	return { getFieldProps, states, handles };
};
