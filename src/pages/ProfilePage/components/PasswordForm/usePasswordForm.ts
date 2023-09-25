import { useContext, useState } from "react";

import { Data } from "../../../../API";
import { getFieldProps } from "../../../../components/Forms/getFieldProps";
import {
	comparePasswords,
	gatherResponseErrors,
} from "../../../../components/validation";
import { UserContext } from "../../../../context";
import { ChangePasswordProps, ResponseErrors } from "../../../../interfaces";
import { defaultFormState } from "./utils";

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
		if (Object.keys(errors).length !== 0) return;

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

	const data = { formData, setFormData, setErrors };
	const getFieldsProps = {
		oldPassword: getFieldProps(data, "oldPassword"),
		newPassword: getFieldProps(data, "newPassword"),
		repeatNewPassword: getFieldProps(data, "repeatNewPassword"),
	};

	const handles = { resetForm, submitForm, deleteUser };

	return {
		getFieldsProps,
		formData,
		handles,
		errors,
	};
};
