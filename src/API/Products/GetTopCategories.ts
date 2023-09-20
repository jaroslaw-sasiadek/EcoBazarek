import axios from "axios";

import { Api } from "../apiURL";
import { errorMessage, handleRequest } from "../handleRequest";

export function GetTopCategories() {
	async function request() {
		return (await axios.get(Api.products.categories.topCategoriesURL)).data;
	}

	return handleRequest({ request, errorMessage });
}
