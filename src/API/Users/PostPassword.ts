import axios from "axios";

import { Api } from "../apiURL";
import { handleRequest } from "../handleRequest";
import { tokenType } from "../../interfaces";

export async function PostPassword(
	event: React.FormEvent<HTMLFormElement>,
	prop: { oldPassword: string; newPassword: string },
	apiKey: tokenType
) {
	const config = {
		headers: {
			Authorization: `Bearer ${apiKey}`,
		},
	};

	async function request() {
		await axios.post(Api.users.passwordURL, prop, config);
	}
	const successMessage = "Pomyślnie zmieniono hasło!";
	const errorMessage = "Nie udało się zmienić hasła";

	return handleRequest({ event, request, successMessage, errorMessage });
}
