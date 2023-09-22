import { UserCreateProps } from "../../interfaces";

export const defaultUserState = (): UserCreateProps => ({
	firstName: "",
	lastName: "",
	email: "",
	phone: "",
	password: "",
	farmName: "",
	farmDesc: "",
	street: "",
	streetNumber: "",
	flatNumber: "",
	city: "",
	postCode: "",
	country: "",
	voivodeship: "",
	county: "",
	district: "",
	repeatPassword: "",
});
