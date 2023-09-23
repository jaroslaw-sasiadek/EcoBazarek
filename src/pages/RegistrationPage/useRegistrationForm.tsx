import { useState } from "react";

import { Data } from "../../API";
import {
	InputTextAreaProps,
	InputTextProps,
	UserCreateProps,
} from "../../interfaces";
import { ButtonStyles } from "../../styles";
import { defaultUserState } from "./utils";

type ResponseErrors = { [key: string]: string };
type ResponseItem = {
	path: string;
	message: string;
};

export const useRegistrationForm = () => {
	const [formData, setFormData] = useState<UserCreateProps>(defaultUserState);
	const [isDisabled, setIsDisabled] = useState(false);
	const [buttonStyle, setButtonStyle] = useState(ButtonStyles.green.enable);
	const [errors, setErrors] = useState<ResponseErrors>({});

	function reset() {
		setFormData(defaultUserState);
	}

	async function submit(event: React.FormEvent<HTMLFormElement>) {
		setIsDisabled(true);
		setButtonStyle(ButtonStyles.green.disable);

		if (formData.password !== formData.repeatPassword) console.log("hello");
		const data = { ...formData };
		delete data["repeatPassword"];

		event.preventDefault();
		const response = await Data.Users.PostUsers(event, data);
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
		key: keyof UserCreateProps
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
