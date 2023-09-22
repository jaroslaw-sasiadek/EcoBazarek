import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { TextFieldStyles } from "../../styles";
import { IconButton } from "./IconButton";

interface SearchProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	isUsed: boolean;
}

export const Search = (props: SearchProps) => {
	const { isUsed, ...other } = props;

	return (
		<li>
			<IconButton
				isUsed={isUsed}
				children={<MagnifyingGlassIcon className="w-[24px]" />}
				aria-label="Toggle Search"
				{...other}
			/>
			{isUsed && (
				<div className="mt-[84px] mr-[40px] p-[8px] w-[300px] absolute right-0 top-0  bg-c3 rounded-[2px] overflow-y-auto">
					<input className={`w-full ${TextFieldStyles.other}`} />
				</div>
			)}
		</li>
	);
};
