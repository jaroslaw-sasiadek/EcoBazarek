import { Content } from "../../components";
import { HeaderStyles } from "../../styles";
import { SignIn } from "./components";
import { Tabs } from "./components/Tabs/Tabs";
import { useLoginForm } from "./components/SignIn";

export const ProfilePage = () => {
	const { isLoggedIn, submit } = useLoginForm();
	return (
		<Content
			title="EcoBazarek | Profil użytkownika"
			keywords="profil, email, hasło, zaloguj"
			description="Zarejestruj się w naszej aplikacji"
			isLoading={false}
		>
			{isLoggedIn && <h1 className={HeaderStyles.brown}>Profil</h1>}
			{isLoggedIn ? <Tabs /> : <SignIn submit={submit} />}
		</Content>
	);
};
