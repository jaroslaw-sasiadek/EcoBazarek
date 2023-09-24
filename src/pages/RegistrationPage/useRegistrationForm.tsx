import { useContext, useState } from "react";

import { Data } from "../../API";
import {
	InputsProps,
	ResponseErrors,
	ResponseItem,
	UserCreateProps,
} from "../../interfaces";
import { ButtonStyles } from "../../styles";
import { defaultUserState } from "./utils";
import { UserContext } from "../../context";

export const useRegistrationForm = () => {
	const { logIn } = useContext(UserContext);
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

		if (formData.password !== formData.repeatPassword) {
			setIsDisabled(false);
			setButtonStyle(ButtonStyles.green.enable);
			const message = "Hasła muszą się zgadzać!";
			setErrors({
				["password"]: message,
				["repeatPassword"]: message,
			});
			event.preventDefault();
			return;
		}
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
			setErrors(objectErrors);
		}
		if (!response) {
			const loginData = { password: formData.password, email: formData.email };
			logIn(event, loginData);
			return;
		}
		setIsDisabled(false);
		setButtonStyle(ButtonStyles.green.enable);
	}

	const getFieldProps = (key: keyof UserCreateProps): InputsProps => ({
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
		setErrors,
		buttonStyle,
		isDisabled,
	};

	return {
		getFieldProps,
		states,
		handles,
	};
};
