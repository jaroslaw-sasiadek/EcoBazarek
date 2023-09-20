import { UserProps } from "./UserProps";

export interface LoginProps {
	email: string;
	password: string;
}

export type logInMethod = (
	event: React.FormEvent<HTMLFormElement>,
	props: LoginProps
) => void;

export interface LoginUserResponse {
	token: string;
	user: UserProps;
}
