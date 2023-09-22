import { ReactNode, useState } from "react";

import { Data } from "../API";
import { LoginProps, LoginUserResponse } from "../interfaces";
import { UserContext } from "./UserContext";

const defaultToken = sessionStorage.getItem("token") || null;
const defaultProfile = JSON.parse(sessionStorage.getItem("user") || "null");

export const UserProvider = ({ children }: { children: ReactNode }) => {
	const [loggingIn, setLoggingIn] = useState(false);
	const [token, setToken] = useState(defaultToken);
	const [profile, setProfile] = useState(defaultProfile);

	const logIn = async (
		event: React.FormEvent<HTMLFormElement>,
		{ email, password }: LoginProps
	) => {
		if (loggingIn) return;
		setLoggingIn(true);
		try {
			const response = await Data.Users.PostLogin(event, { email, password });
			const { token, user } = response as LoginUserResponse;
			setToken(token);
			setProfile(user);
			token && sessionStorage.setItem("token", token);
			user && sessionStorage.setItem("user", JSON.stringify(user));
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
