import { useEffect, useState } from "react";

import { Content } from "../components/main/Content";
import { Assets } from "../assets/_Assets";
import { Data } from "../API/_Data";
import { UlCategories } from "../components/UlCategories";
import { RequestCategoriesProp } from "../interfaces/RequestProps";

export const HomePage = () => {
	const [loading, setLoading] = useState(false);
	const [topCategories, setTopCategories] = useState<RequestCategoriesProp>([]);
	useEffect(() => {
		setLoading(true);
		Promise.all([
			Data.Products.GetTopCategories(),
			Data.Products.GetTopCategories(),
		])
			.then((response) => {
				setTopCategories(response[0] as RequestCategoriesProp);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	function generateMock() {
		const mockItems = [];
		for (let index = 0; index < 12; index++) {
			mockItems.push(
				<li
					key={index}
					className="w-[248px] h-[275px] bg-[--c5] rounded-[16px]"
				></li>
			);
		}
		return mockItems;
	}
	return (
		<Content
			title="EcoBazarek | Home"
			keywords="eko, bazarek, home, główna, top, kategorie"
			description="EcoBazarek — aplikacja, w której możesz kupić świeże produkty"
			isLoading={loading}
		>
			<section
				style={{ backgroundImage: `url("${Assets.Images.home}")` }}
				className="absolute w-[100%] h-[100%] top-0 bg-cover left-0"
			>
				<h1 className="text-center drop-shadow-lg mt-[360px] text-[68px] font-[900] text-[--c2] uppercase">
					Świeże owoce i warzywa
				</h1>
			</section>
			<h2 className="mt-[980px] pb-[37px] text-center text-[32px] font-[500] uppercase">
				popularne kategorie
			</h2>
			<section>
				<UlCategories categories={topCategories} />
			</section>
			<h2 className="pt-[40px] pb-[60px] text-center text-[32px] font-[500] uppercase">
				produkty
			</h2>
			<section>
				<ul className="flex flex-wrap gap-[16px] products">{generateMock()}</ul>
			</section>
		</Content>
	);
};
