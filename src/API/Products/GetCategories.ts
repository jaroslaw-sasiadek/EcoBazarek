import axios from "axios";

import { Api } from "../apiURL";
import { errorMessage, handleRequest } from "../handleRequest";

export function GetCategories() {
	async function request() {
		return (await axios.get(Api.products.categoriesURL)).data;
	}

	return handleRequest({ request, errorMessage });
}
