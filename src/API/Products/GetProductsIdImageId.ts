import axios from "axios";

import { Api } from "../apiURL";
import { handleRequest } from "../handleRequest";

export function GetProductsIdImageId(id: string) {
	async function request() {
		return (await axios.get(Api.productsURL + "/" + id + "/images")).data;
	}
	const errorMessage = "Nie znaleziono żadnego produktu!";

	return handleRequest({ request, errorMessage });
}
