import axios from "axios";

import { Api } from "../apiURL";
import { handleRequest } from "../handleRequest";
import { ContactProps } from "../../interfaces/ContactProps";

async function PostContact(
	event: React.FormEvent<HTMLFormElement>,
	props: ContactProps
) {
	async function request() {
		await axios.post(Api.contactURL, props);
	}
	const successMessage = "Dziękujemy za kontakt!";
	const errorMessage = "Nie udało się wysłać wiadomości!";

	return handleRequest({ event, request, successMessage, errorMessage });
}

export { PostContact as Contact };
