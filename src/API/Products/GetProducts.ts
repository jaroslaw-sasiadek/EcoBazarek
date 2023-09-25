import axios from "axios";

import { Api } from "../apiURL";
import { errorMessage, handleRequest } from "../handleRequest";

export function GetProducts() {
	async function request() {
		return (await axios.get(Api.productsURL)).data;
	}

	return handleRequest({ request, errorMessage });
}
