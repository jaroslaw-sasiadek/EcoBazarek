import axios from "axios";

import { Api } from "../apiURL";
import { UserCreateProps } from "../../interfaces";
import { handleRequest } from "../handleRequest";

export async function PostUsers(
	event: React.FormEvent<HTMLFormElement>,
	props: UserCreateProps
) {
	async function request() {
		await axios.post(Api.usersURL, props);
	}
	const successMessage = "Dziękujemy za rejestrację!";
	const errorMessage = "Nie udało się zarejestrować";

	return handleRequest({ event, request, successMessage, errorMessage });
}
