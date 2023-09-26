import { useState, useEffect } from "react";
import { RequestCategoriesProp } from "../../../../../interfaces";

export const DivCategories = ({
	categories,
}: {
	categories: RequestCategoriesProp;
}) => {
	const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

	function handleCheckboxChange(categoryName: string) {
		setCheckedItems((prevItems) => ({
			...prevItems,
			[categoryName]: !prevItems[categoryName],
		}));
	}

	useEffect(() => {
		if (Array.isArray(categories) && categories.length > 0) {
			const initialCheckedItems: Record<string, boolean> = {};
			setCheckedItems(initialCheckedItems);
		}
	}, [categories]);

	return Array.isArray(categories) && categories.length > 0 ? (
		<div>
			<span className="flex mt-[30px] mb-[14px] text-[14px] font-[900]">
				Kategorie
			</span>
			<ul>
				{categories.map((category) => (
					<li
						className={`${
							checkedItems[category.name] ? "bg-c3 text-c5" : ""
						} flex items-center h-[40px] w-[150px] transition-all hover:bg-c3 hover:text-c5 rounded-[2px] border-c3 hover:border-l-[10px]`}
						key={category.id}
					>
						<label className="flex gap-[12px] items-center select-none cursor-pointer">
							<input
								className="h-[16px] w-[16px] rounded-[4px] cursor-pointer"
								type="checkbox"
								value={category.name}
								checked={checkedItems[category.name] || false}
								onChange={() => handleCheckboxChange(category.name)}
							/>
							<span className="flex items-center text-[14px] h-[40px] w-[150px] font-[500]">
								{category.name}
							</span>
						</label>
					</li>
				))}
			</ul>
		</div>
	) : null;
};
