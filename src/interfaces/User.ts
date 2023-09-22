import { logInMethod } from ".";

export interface UserProps {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	password: string;
	farmName: string;
	farmDesc: string;
	street: string;
	streetNumber: string;
	flatNumber: string;
	city: string;
	postCode: string;
	country: string;
	voivodeship: string;
	county: string;
	district: string;
}

export interface UserContextProps {
	token: string | null;
	profile: UserProps | null;
	isLoggedIn: boolean;
	loggingIn: boolean;
	logIn: logInMethod;
}

export interface UserCreateProps extends Omit<UserProps, "id"> {
	repeatPassword?: string;
}
