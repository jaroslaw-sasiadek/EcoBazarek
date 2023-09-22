import { RequestCategoriesProp } from "../interfaces";
import { ListStyles, SpanStyles } from "../styles";

export const UlCategories = ({
	categories,
}: {
	categories: RequestCategoriesProp;
}) =>
	categories !== "error" ? (
		<ul className={ListStyles.defaultList}>
			{categories.map((category) => (
				<li key={category.id} className={ListStyles.defaultListItem}>
					<img className="mt-[10px]" src={category.iconUrl} alt="" />
					<span className={SpanStyles.default}>{category.name}</span>
				</li>
			))}
		</ul>
	) : null;
