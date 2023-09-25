import { useContext, useState } from "react";

import { UserContext } from "../../../../context";
import {
	InputsProps,
	ResponseErrors,
	ResponseItem,
	UserCreateProps,
} from "../../../../interfaces";
import { useRegistrationForm } from "../../../RegistrationPage/useRegistrationForm";
import { Data } from "../../../../API";
import { defaultUserState } from "../../../RegistrationPage/utils";
import { toast } from "react-toastify";

export const useFarmDataForm = () => {
	const { profile, setProfile, token } = useContext(UserContext);
	const profileState = profile ? profile : defaultUserState;
	const { states } = useRegistrationForm();
	const [formData, setFormData] = useState(profileState);

	const logOut = () => {
		sessionStorage.removeItem("user");
		sessionStorage.removeItem("token");
		toast.success("Po chwili nastąpi wylogowanie!");

		setTimeout(function () {
			location.reload();
		}, 2000);
	};

	(states.formData as unknown) = formData;
	const reset = () => setFormData(profileState);
	const submitFarmData = async (event: React.FormEvent<HTMLFormElement>) => {
		const data = { ...formData };
		delete data["repeatPassword"];

		event.preventDefault();
		const response = await Data.Users.PutUsers(event, data, token);

		if (Object.keys(response).length !== 0 && response !== "error") {
			const objectErrors = response.reduce(
				(previous: ResponseErrors, current: ResponseItem) => {
					previous[current.path] = current.message;
					return previous;
				},
				{}
			);
			states.setErrors(objectErrors);
		}
		if (Object.keys(response).length === 0) {
			sessionStorage.setItem("user", JSON.stringify(data));
			setProfile(data);
		}
	};

	const getFieldProps = (key: keyof UserCreateProps): InputsProps => ({
		name: key,
		value: formData[key],
		onChange: (event) => {
			states.setErrors((previous) => {
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

	const handles = { logOut, reset, submitFarmData };

	return {
		getFieldProps,
		states,
		handles,
	};
};
