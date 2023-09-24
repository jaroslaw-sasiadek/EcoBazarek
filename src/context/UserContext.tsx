import { createContext } from "react";

import { UserContextProps } from "../interfaces";

export const UserContext = createContext<UserContextProps>({
	token: null,
	profile: null,
	setProfile: () => {},
	isLoggedIn: false,
	loggingIn: false,
	logIn: () => {},
});
