import { useState, useEffect } from "react";

import { Data } from "../../API";
import {
	RequestTypesProp,
	RequestCategoriesProp,
	RequestProductsProp,
} from "../../interfaces";
import {
	DivCategories,
	DivTypes,
	UlProducts,
} from "../ProfilePage/components/UserProductsForm/components";
import { TextFieldStyles } from "../../styles";

export const ProductsForm = ({
	setLoading,
}: {
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const [types, setTypes] = useState<RequestTypesProp | "error">([]);
	const [categories, setCategories] = useState<RequestCategoriesProp | "error">(
		[]
	);
	const [products, setProducts] = useState<RequestProductsProp | "error">([]);
	const [filterText, setFilterText] = useState<string>("");

	const filteredTypes = (Array.isArray(types) ? types : []).filter((type) =>
		type.name.toLowerCase().includes(filterText.toLowerCase())
	);
	const filteredCategories = (
		Array.isArray(categories) ? categories : []
	).filter((category) =>
		category.name.toLowerCase().includes(filterText.toLowerCase())
	);

	useEffect(() => {
		setLoading(true);
		Promise.all([
			Data.Products.GetTypes(),
			Data.Products.GetCategories(),
			Data.Products.GetProducts(),
		])
			.then((response) => {
				setTypes(response[0] as RequestTypesProp);
				setCategories(response[1] as RequestCategoriesProp);
				setProducts(response[2] as RequestProductsProp);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [setLoading]);

	return (
		<section className="flex gap-[16px] w-full">
			<aside className="w-[250px] gap-[16px]">
				<input
					className={`${TextFieldStyles.search}`}
					type="text"
					placeholder="Szukaj frazę..."
					value={filterText}
					onChange={(e) => setFilterText(e.target.value)}
				/>
				<DivTypes types={filteredTypes} />
				<DivCategories categories={filteredCategories} />
			</aside>
			<section>
				<UlProducts products={products} />
			</section>
		</section>
	);
};
