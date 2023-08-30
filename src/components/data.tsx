import axios from "axios";

const url = {
	users: "https://api-eko-bazarek.azurewebsites.net/api/users",
	me: "https://api-eko-bazarek.azurewebsites.net/api/users/me",
	changePassword:
		"https://api-eko-bazarek.azurewebsites.net/api/users/change-password",
	login: "https://api-eko-bazarek.azurewebsites.net/api/users/login",

	products: "https://api-eko-bazarek.azurewebsites.net/api/products",
	productsID: "https://api-eko-bazarek.azurewebsites.net/api/products/{id}",
	types: "https://api-eko-bazarek.azurewebsites.net/api/products/types",
	units: "https://api-eko-bazarek.azurewebsites.net/api/products/units",
	categories:
		"https://api-eko-bazarek.azurewebsites.net/api/products/categories",

	subscribe: "https://api-eko-bazarek.azurewebsites.net/api/subscribe",
	contact: "https://api-eko-bazarek.azurewebsites.net/api/contact",
};

export const handleData = {
	/* 	axios.get(URL.users, {})
	axios.post(URL.users, {})
	axios.put(URL.users, {})
	axios.delete(URL.users, {})
	axios.get(URL.me, {})
	axios.post(URL.changePassword, {})
	axios.post(URL.login, {})

	axios.get(URL.products, {})
	axios.post(URL.products, {})
	axios.put(URL.products, {})
	axios.get(URL.productsID, {})
	axios.get(URL.types, {})
	axios.get(URL.units, {})
	axios.get(URL.categories, {}) */

	subscribe: function (email: string) {
		axios.post(url.subscribe, { email });
	},
	/*
	contact: function (fullName, email, phone, subject, message) {
		axios.post(url.contact, { fullName, email, phone, subject, message });
	},
	*/
};
