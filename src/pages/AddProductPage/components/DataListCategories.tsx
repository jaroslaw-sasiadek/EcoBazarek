import { RequestCategoriesProp } from "../../../interfaces";

export const DataListCategories = ({
	categories,
}: {
	categories: RequestCategoriesProp;
}) => {
	return categories && categories !== "error" ? (
		<datalist id="category">
			{categories.map((category) => (
				<option key={category.id} value={category.name} />
			))}
		</datalist>
	) : null;
};
