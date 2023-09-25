import axios from "axios";

import { PostProductsProps, tokenType } from "../../interfaces";
import { Api } from "../apiURL";
import { handleRequest } from "../handleRequest";

export async function PostProduct(
	event: React.FormEvent<HTMLFormElement>,
	props: PostProductsProps,
	apiKey: tokenType
) {
	const config = {
		headers: {
			Authorization: `Bearer ${apiKey}`,
		},
	};

	async function request() {
		return (await axios.post(Api.productsURL, props, config)).data;
	}
	const successMessage = "Pomyślnie wysłano produkt!";
	const errorMessage = "Nie udało się zamieścić produktu!";

	return handleRequest({ event, request, successMessage, errorMessage });
}
