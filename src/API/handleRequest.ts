import axios from "axios";
import { toast } from "react-toastify";

import { RequestProps } from "./Interfaces/RequestProps";

const defaultErrorMessage = "Nie udało się pobrać zawartości!";

async function handleRequest(props: RequestProps) {
	const { event, request, successMessage, errorMessage } = props;

	event.preventDefault();

	try {
		const response = await request();
		if (successMessage) toast.success(successMessage);
		return response;
	} catch (error) {
		let errorDescription = "";
		if (axios.isAxiosError(error) && error.response) {
			errorDescription = `\n Error: ${error.response.status} (${error.response.statusText})`;
		}
		toast.error(errorMessage + errorDescription);
	}
}

export { defaultErrorMessage as errorMessage, handleRequest };
