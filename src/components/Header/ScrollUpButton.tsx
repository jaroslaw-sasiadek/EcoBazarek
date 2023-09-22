import { ChevronUpIcon } from "@heroicons/react/20/solid";

import { ButtonStyles } from "../../styles";

export const ScrollUpButton = () => (
	<button
		type="button"
		title="ScrollToTop"
		className={`${ButtonStyles.icons} flex justify-center fixed bottom-[58px] right-[40px] w-[42px] h-[42px] bg-c3 rounded-full`}
		onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
	>
		<ChevronUpIcon className="w-[32px] mt-[4px]" />
	</button>
);
