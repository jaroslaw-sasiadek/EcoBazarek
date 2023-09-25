import axios from "axios";

import { Api } from "../apiURL";
import { handleRequest } from "../handleRequest";

export function GetProductsId(id: string) {
	async function request() {
		return (await axios.get(Api.productsURL + id)).data;
	}
	const errorMessage = "Nie znaleziono żadnego produktu!";

	return handleRequest({ request, errorMessage });
}
