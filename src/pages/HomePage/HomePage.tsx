import { Assets } from "../../assets";
import { Content, UlCategories } from "../../components";
import { UlProducts } from "../ProfilePage/components/UserProductsForm/components";
import { generateMock } from "./generateMock";
import { useGetData } from "./useGetData";

export const HomePage = () => {
	const { loading, topCategories, products } = useGetData();
	return (
		<Content
			title="EcoBazarek | Home"
			keywords="eko, bazarek, home, główna, top, kategorie"
			description="EcoBazarek — aplikacja, w której możesz kupić świeże produkty"
			isLoading={loading}
		>
			<section
				style={{ backgroundImage: `url("${Assets.Images.home}")` }}
				className="absolute w-full h-full top-0 bg-cover left-0"
			>
				<h1 className="text-center drop-shadow-lg mt-[360px] text-[68px] font-[900] text-c2 uppercase">
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
			<section className="flex flex-wrap gap-[16px]">
				<UlProducts products={products} />
				<ul className="flex flex-wrap gap-[16px]">{generateMock()}</ul>
			</section>
		</Content>
	);
};
