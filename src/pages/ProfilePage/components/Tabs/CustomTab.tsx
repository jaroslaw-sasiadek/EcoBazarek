import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import { TabStyles } from "../../../../styles";

export const CustomTab = ({ text }: { text: string }) => {
	return (
		<Tab as={Fragment}>
			{({ selected }) => (
				<h2
					className={`${TabStyles.tabsStyle} ${
						selected ? TabStyles.activeStyle : ""
					}`}
				>
					{text}
				</h2>
			)}
		</Tab>
	);
};
