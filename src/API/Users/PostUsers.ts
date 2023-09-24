import axios from "axios";

import { UserCreateProps } from "../../interfaces";
import { Api } from "../apiURL";
import { handleRequest } from "../handleRequest";

export async function PostUsers(
	event: React.FormEvent<HTMLFormElement>,
	props: UserCreateProps
) {
	async function request() {
		await axios.post(Api.usersURL, props);
	}
	const errorMessage = "Nie udało się zarejestrować";

	return handleRequest({ event, request, errorMessage });
}
