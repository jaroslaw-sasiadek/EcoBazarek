import { useContext, useState } from "react";

import { Data } from "../../../../API";
import { UserContext } from "../../../../context";
import {
	ChangePasswordProps,
	ResponseErrors,
	InputsProps,
} from "../../../../interfaces";
import { defaultFormState } from "./utils";
import {
	comparePasswords,
	gatherResponseErrors,
} from "../../../../components/validation";

export const usePasswordForm = () => {
	const { token } = useContext(UserContext);
	const [formData, setFormData] =
		useState<ChangePasswordProps>(defaultFormState);
	const [errors, setErrors] = useState<ResponseErrors>({});

	function resetForm() {
		setFormData(defaultFormState);
	}

	async function submitForm(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const compareError = comparePasswords(
			formData.newPassword,
			formData.repeatNewPassword
		);
		setErrors({ ...compareError });
		if (Object.keys(errors).length === 0) return;

		const data = {
			oldPassword: formData.oldPassword,
			newPassword: formData.newPassword,
		};
		const response = await Data.Users.PostPassword(event, data, token);

		const responseErrors = gatherResponseErrors(response);
		setErrors(responseErrors);
	}

	async function deleteUser(
		event: React.MouseEvent<HTMLInputElement, MouseEvent>
	) {
		Data.Users.DeleteUser(event, token);
	}

	const getFieldProps = (key: keyof ChangePasswordProps): InputsProps => ({
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

	const handles = { resetForm, submitForm, deleteUser };

	return {
		getFieldProps,
		formData,
		handles,
		errors,
	};
};
