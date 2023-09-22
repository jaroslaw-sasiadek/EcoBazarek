import { Content } from "../components";
import { HeaderStyles } from "../styles";

export const NotFoundPage = () => {
	return (
		<Content
			title="EcoBazarek | Nie znaleziono"
			keywords="nie, znaleziono"
			description="Nie udało się znaleźć strony"
			isLoading={false}
		>
			<div className={`${HeaderStyles.brown} flex flex-col items-center`}>
				<h1>Nie znaleziono strony!</h1>
				<h2>404</h2>
			</div>
		</Content>
	);
};
