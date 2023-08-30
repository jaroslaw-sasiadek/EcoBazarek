import { ChevronUpIcon } from "@heroicons/react/24/outline";

const ScrollUpButton = () => (
	<button
		type="button"
		title="ScrollToTop"
		className="fixed bottom-[58px] right-[40px] flex justify-center w-[42px] h-[42px] rounded-full"
		onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
	>
		<ChevronUpIcon className="mt-[6px] w-[28px]" />
	</button>
);

export default ScrollUpButton;
