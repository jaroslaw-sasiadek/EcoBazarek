import { Content } from "../../components";
import { HeaderStyles } from "../../styles";

export const ProfilePage = () => {
	return (
		<Content
			title="EcoBazarek | Profil użytkownika"
			keywords="profil, logowanie, email, hasło, zarejestruj, zaloguj"
			description="Profil użytkownika naszej aplikacji"
			isLoading={false}
		>
			<label className="flex flex-col w-[515px] cursor-pointer">
				<h1 className={HeaderStyles.brown}>Profil użytkownika</h1>
				<form noValidate></form>
			</label>
		</Content>
	);
};
