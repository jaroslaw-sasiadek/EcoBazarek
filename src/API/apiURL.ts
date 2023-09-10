const apiURL = "https://api-eko-bazarek.azurewebsites.net/api";

const contactURL = apiURL + "/contact";
const subscribeURL = apiURL + "/subscribe";

const usersURL = apiURL + "/users";
const meURL = usersURL + "/me";
const loginURL = usersURL + "/login";
const passwordURL = usersURL + "/change-password";
const users = { meURL, loginURL, passwordURL };

const productsURL = apiURL + "/products";
const typesURL = productsURL + "/types";
const categoriesURL = productsURL + "/categories";
const topCategoriesURL = categoriesURL + "/top";
const categories = { topCategoriesURL };
const unitsURL = productsURL + "/units";
const products = { typesURL, categories, categoriesURL, unitsURL };

export const Api = {
	apiURL,
	contactURL,
	subscribeURL,
	usersURL,
	users: users,
	productsURL,
	products: products,
};
