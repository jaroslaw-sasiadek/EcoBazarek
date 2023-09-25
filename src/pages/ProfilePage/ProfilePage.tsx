import { useState } from "react";

import { Content } from "../../components";
import { HeaderStyles } from "../../styles";
import { SignIn } from "./components";
import { Tabs } from "./components/Tabs/Tabs";
import { useLoginForm } from "./components/SignIn";

export const ProfilePage = () => {
	const { isLoggedIn, submit } = useLoginForm();
	const [isLoading, setIsLoading] = useState(false);
	return (
		<Content
			title="EcoBazarek | Profil użytkownika"
			keywords="profil, email, hasło, zaloguj"
			description="Zarejestruj się w naszej aplikacji"
			isLoading={isLoading}
		>
			{isLoggedIn && <h1 className={HeaderStyles.brown}>Profil</h1>}
			{isLoggedIn ? (
				<Tabs setLoading={setIsLoading} />
			) : (
				<SignIn submit={submit} />
			)}
		</Content>
	);
};
