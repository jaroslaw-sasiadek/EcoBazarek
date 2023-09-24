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

export type tokenType = string | null;

export interface UserContextProps {
	token: tokenType;
	profile: UserProps | null;
	setProfile: React.Dispatch<unknown>;
	isLoggedIn: boolean;
	loggingIn: boolean;
	logIn: logInMethod;
}

export interface UserCreateProps extends Omit<UserProps, "id"> {
	repeatPassword?: string;
}

export interface UserProfileProps extends Omit<UserProps, "password"> {}

export interface ChangePasswordProps {
	oldPassword: string;
	newPassword: string;
	repeatNewPassword: string;
}
