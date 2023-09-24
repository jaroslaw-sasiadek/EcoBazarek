import axios from "axios";

import { Api } from "../apiURL";
import { handleRequest } from "../handleRequest";
import { tokenType } from "../../interfaces";

export async function DeleteUser(
	event: React.MouseEvent<HTMLInputElement, MouseEvent>,
	apiKey: tokenType
) {
	if (!window.confirm("Jesteś pewny?")) return;

	const config = {
		headers: {
			Authorization: `Bearer ${apiKey}`,
		},
	};

	async function request() {
		await axios.delete(Api.usersURL, config);
	}
	const successMessage = "Pomyślnie usunięto użytkownika!";
	const errorMessage = "Nie udało się usunąć profilu!";

	handleRequest({ event, request, successMessage, errorMessage });

	sessionStorage.removeItem("user");
	sessionStorage.removeItem("token");

	setTimeout(function () {
		location.reload();
	}, 2000);
}
