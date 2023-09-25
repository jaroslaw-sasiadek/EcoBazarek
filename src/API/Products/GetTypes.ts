import axios from "axios";

import { Api } from "../apiURL";
import { errorMessage, handleRequest } from "../handleRequest";

export function GetTypes() {
	async function request() {
		return (await axios.get(Api.products.typesURL)).data;
	}

	return handleRequest({ request, errorMessage });
}
