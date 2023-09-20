import axios from "axios";

import { Api } from "../apiURL";
import { handleRequest } from "../handleRequest";

function PostSubscribe(event: React.FormEvent<HTMLFormElement>, email: string) {
	const data = { email };

	async function request() {
		await axios.post(Api.subscribeURL, data);
	}
	const successMessage = "Dziękujemy za subskrypcję!";
	const errorMessage = "Nie udało się zasubskrybować!";

	return handleRequest({ event, request, successMessage, errorMessage });
}

export { PostSubscribe as Subscribe };
