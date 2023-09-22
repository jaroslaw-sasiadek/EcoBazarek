import { useState } from "react";

import { Data } from "../../API";
import {
	InputTextAreaProps,
	InputTextProps,
	UserCreateProps,
} from "../../interfaces";
import { ButtonStyles } from "../../styles";
import { defaultUserState } from "./utils";

export const useRegistrationForm = () => {
	const [formData, setFormData] = useState<UserCreateProps>(defaultUserState);
	const [isDisabled, setIsDisabled] = useState(false);
	const [buttonStyle, setButtonStyle] = useState(ButtonStyles.green.enable);
	const [errors, setErrors] = useState<string[]>([]);

	function reset() {
		setFormData(defaultUserState);
	}

	async function submit(event: React.FormEvent<HTMLFormElement>) {
		setIsDisabled(true);
		setButtonStyle(ButtonStyles.green.disable);

		const data = { ...formData };
		delete data["repeatPassword"];

		event.preventDefault();
		const response = await Data.Users.PostUsers(event, data);
		if (response && response !== "error") setErrors(response);
		if (!response) return;
		setIsDisabled(false);
		setButtonStyle(ButtonStyles.green.enable);
	}

	const getFieldProps = (
		key: keyof UserCreateProps
	): Omit<InputTextProps & InputTextAreaProps, "spanName"> => ({
		name: key,
		value: formData[key],
		onChange: (event) =>
			setFormData((previous) => ({
				...previous,
				[key]: event.target.value,
			})),
	});

	const handles = { reset, submit };
	const states = {
		formData,
		errors,
		buttonStyle,
		isDisabled,
	};

	return {
		getFieldProps,
		states,
		handles,
	};
};
