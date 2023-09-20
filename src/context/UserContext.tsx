import { createContext, ReactNode, useState, FormEvent } from "react";

import { LoginProps, LoginUserResponse } from "../interfaces/LoginProps";
import { UserContextProps, UserProps } from "../interfaces/UserProps";
import { Data } from "../API/_Data";

export const UserContext = createContext<UserContextProps>({
	token: null,
	profile: null,
	isLoggedIn: false,
	loggingIn: false,
	logIn: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
	const [loggingIn, setLoggingIn] = useState(false);
	const [token, setToken] = useState<string | null>(
		sessionStorage.getItem("token") || null
	);
	const [profile, setProfile] = useState<UserProps | null>(
		JSON.parse(sessionStorage.getItem("user") || "null")
	);

	const logIn = async (
		event: FormEvent<HTMLFormElement>,
		{ email, password }: LoginProps
	) => {
		if (loggingIn) return;
		setLoggingIn(true);
		try {
			const response = await Data.Users.PostLogin(event, { email, password });
			const { token, user } = response as LoginUserResponse;
			setToken(token);
			setProfile(user);
			sessionStorage.setItem("token", token);
			sessionStorage.setItem("user", JSON.stringify(user));
		} finally {
			setLoggingIn(false);
		}
	};

	return (
		<UserContext.Provider
			value={{ loggingIn, token, profile, isLoggedIn: Boolean(profile), logIn }}
		>
			{children}
		</UserContext.Provider>
	);
};
