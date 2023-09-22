import { SparklesIcon } from "@heroicons/react/24/outline";

import { IconButton } from "./IconButton";

interface FavouritesProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	isUsed: boolean;
}

export const Favourites = (props: FavouritesProps) => {
	const { isUsed, ...other } = props;

	return (
		<li>
			<IconButton
				isUsed={isUsed}
				children={<SparklesIcon className="w-[24px]" />}
				aria-label="Toggle Favourites"
				{...other}
			/>
			{isUsed && (
				<div className="mt-[84px] mr-[40px] absolute right-0 top-0 bg-c3 rounded-[2px] overflow-y-auto">
					<ul className="p-[8px] w-[300px] h-full max-h-[300px]">
						<li className="mb-[4px] bg-c4 rounded-[2px]">a</li>
						<li className="mb-[4px] bg-c4 rounded-[2px]">a</li>
						<li className="mb-[4px] bg-c4 rounded-[2px]">a</li>
					</ul>
				</div>
			)}
		</li>
	);
};
