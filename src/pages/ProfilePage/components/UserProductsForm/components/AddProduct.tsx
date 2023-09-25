import { useNavigate } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/24/solid";

export const AddProduct = () => {
	const navigate = useNavigate();
	const handleClick = () => navigate("/dodaj-produkt");

	return (
		<li
			className="flex items-center justify-center w-[250px] h-[275px] bg-c5 rounded-[16px] cursor-pointer"
			onClick={handleClick}
		>
			<label>
				<PlusIcon className="w-[80px] text-c1 cursor-pointer" />
			</label>
		</li>
	);
};
