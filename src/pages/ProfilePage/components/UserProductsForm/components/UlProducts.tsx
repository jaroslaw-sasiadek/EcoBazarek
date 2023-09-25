import { useContext } from "react";

import { AddProduct } from ".";
import { UserContext } from "../../../../../context";
import { RequestProductsProp } from "../../../../../interfaces";

export const UlProducts = ({ products }: { products: RequestProductsProp }) => {
	const { isLoggedIn } = useContext(UserContext);
	return products !== "error" ? (
		<ul className="flex flex-wrap gap-[16px]">
			{isLoggedIn ? <AddProduct /> : null}
			{products.map((product) => {
				return (
					<li
						className="relative w-[250px] h-[275px] bg-c5 rounded-[16px]"
						key={product.id}
					>
						<div className="w-[250px] h-[135px] bg-c1 rounded-t-[16px]" />
						<div className="m-[8px] top-0 right-0 absolute w-[32px] h-[32px] bg-c2 rounded-full" />
						<div className="p-[12px]">
							<span className="text-[14px] font-[600] select-none">
								{product.name}
							</span>
							<p className="text-[12px]">{product.desc}</p>
							<span>{product.price}</span>
						</div>
						<div className="m-[8px] bottom-0 right-0 absolute w-[32px] h-[32px] bg-c3 rounded-full" />
						<div className="m-[8px] bottom-0 right-[40px] absolute w-[32px] h-[32px] bg-c3" />
					</li>
				);
			})}
		</ul>
	) : null;
};
