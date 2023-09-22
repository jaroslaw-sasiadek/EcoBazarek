import axios from "axios";

import { Api } from "../apiURL";
import { LoginProps } from "../../interfaces";
import { handleRequest } from "../handleRequest";

export async function PostLogin(
	event: React.FormEvent<HTMLFormElement>,
	props: LoginProps
) {
	async function request() {
		return (await axios.post(Api.users.loginURL, props)).data;
	}
	const successMessage = "Udało się poprawnie zalogować!";
	const errorMessage = "Nie udało się zalogować!";

	return handleRequest({ event, request, successMessage, errorMessage });
}
