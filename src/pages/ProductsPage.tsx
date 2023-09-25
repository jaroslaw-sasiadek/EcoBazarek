import { useState } from "react";

import { Content } from "../components";
import { HeaderStyles } from "../styles";
import { UserProductsForm } from "./ProfilePage/components";

export const ProductsPage = () => {
	const [isLoading, setIsLoading] = useState(false);
	return (
		<Content
			title="EcoBazarek | Produkty"
			keywords="produkty, eko, bazarek"
			description="Tutaj znajdziesz produkty znajdujące się w naszej aplikacji"
			isLoading={isLoading}
		>
			<h1 className={HeaderStyles.brown}>Produkty</h1>
			<UserProductsForm setLoading={setIsLoading} />
		</Content>
	);
};
