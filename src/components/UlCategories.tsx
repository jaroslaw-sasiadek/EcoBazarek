import { RequestCategoriesProp } from "../interfaces/RequestProps";

export const UlCategories = ({
	categories,
}: {
	categories: RequestCategoriesProp;
}) =>
	categories !== "error" ? (
		<ul className="top-categories flex flex-wrap gap-[16px]">
			{categories.map((category) => (
				<li
					key={category.id}
					className="flex flex-col flex-[0_0_auto] gap-[16px] justify-center items-center m-0 bg-[--c5] w-[160px] h-[160px] rounded-[19px]"
				>
					<img className="mt-[-10px]" src={category.iconUrl} alt="" />
					<span className="text-[14px] font-[500]">{category.name}</span>
				</li>
			))}
		</ul>
	) : null;
