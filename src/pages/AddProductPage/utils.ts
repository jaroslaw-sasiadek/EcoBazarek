import { PostProductsProps } from "../../interfaces";

export const defaultProductState = (): PostProductsProps => ({
	name: "",
	desc: "",
	price: 0,
	type: "",
	category: "",
	unit: "",
});
