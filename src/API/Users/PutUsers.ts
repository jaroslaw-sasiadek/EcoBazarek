import axios from "axios";

import { Api } from "../apiURL";
import { UserCreateProps, tokenType } from "../../interfaces";
import { handleRequest } from "../handleRequest";

export async function PutUsers(
	event: React.FormEvent<HTMLFormElement>,
	props: UserCreateProps,
	apiKey: tokenType
) {
	const config = {
		headers: {
			Authorization: `Bearer ${apiKey}`,
		},
	};

	async function request() {
		return (await axios.put(Api.usersURL, props, config)).data;
	}
	const successMessage = "Udało się zaktualizować dane!";
	const errorMessage = "Nie udało się zaktualizować danych!";

	return handleRequest({ event, request, successMessage, errorMessage });
}
