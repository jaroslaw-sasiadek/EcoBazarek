import axios from "axios";
import { toast } from "react-toastify";

import { RequestProps } from "../interfaces/Request";

const defaultErrorMessage = "Nie udało się pobrać zawartości!";

async function handleRequest(props: RequestProps) {
	const { event, request, successMessage, errorMessage } = props;

	if (event) event.preventDefault();

	try {
		const response = await request();
		successMessage && toast.success(successMessage);
		return response;
	} catch (error) {
		let errorDescription = "";
		if (axios.isAxiosError(error) && error.response) {
			errorDescription = `\nError: ${error.response.status} (${error.response.statusText})`;
			if (error.response?.data?.inner) {
				return error.response.data.inner;
			}
		}
		toast.error(errorMessage + errorDescription);
		return "error";
	}
}

export { defaultErrorMessage as errorMessage, handleRequest };
