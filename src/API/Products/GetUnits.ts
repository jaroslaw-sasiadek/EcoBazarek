import axios from "axios";

import { Api } from "../apiURL";
import { errorMessage, handleRequest } from "../handleRequest";

export function GetUnits() {
	async function request() {
		return (await axios.get(Api.products.unitsURL)).data;
	}

	return handleRequest({ request, errorMessage });
}
