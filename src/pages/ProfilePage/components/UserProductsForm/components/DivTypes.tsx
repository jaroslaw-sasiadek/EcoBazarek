import { useState, useEffect } from "react";
import { RequestTypesProp } from "../../../../../interfaces";

export const DivTypes = ({ types }: { types: RequestTypesProp }) => {
	const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

	function handleCheckboxChange(typeName: string) {
		setCheckedItems((prevItems) => ({
			...prevItems,
			[typeName]: !prevItems[typeName],
		}));
	}

	useEffect(() => {
		if (Array.isArray(types) && types.length > 0) {
			const initialCheckedItems: Record<string, boolean> = {};
			setCheckedItems(initialCheckedItems);
		}
	}, [types]);

	return Array.isArray(types) && types.length > 0 ? (
		<div>
			<span className="flex mt-[30px] mb-[14px] text-[14px] font-[900]">
				Typ
			</span>
			<ul>
				{types.map((type) => (
					<li
						className={`${
							checkedItems[type.name] ? "bg-c3 text-c5" : ""
						} flex items-center h-[40px] w-[150px] transition-all hover:bg-c3 hover:text-c5 rounded-[2px] border-c3 hover:border-l-[10px]`}
						key={type.id}
					>
						<label className="flex gap-[12px] items-center select-none cursor-pointer">
							<input
								className="text-blue-500 form-checkbox h-[16px] w-[16px] rounded-[4px] cursor-pointer"
								type="checkbox"
								value={type.name}
								checked={checkedItems[type.name] || false}
								onChange={() => handleCheckboxChange(type.name)}
							/>
							<span className="flex items-center text-[14px] h-[40px] w-[150px] font-[500]">
								{type.name}
							</span>
						</label>
					</li>
				))}
			</ul>
		</div>
	) : null;
};
