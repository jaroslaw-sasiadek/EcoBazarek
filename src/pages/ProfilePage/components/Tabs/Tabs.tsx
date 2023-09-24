import { Tab } from "@headlessui/react";

import { PasswordForm, FarmData, YourProducts } from "..";
import { CustomTab } from "./CustomTab";
import { TabStyles } from "../../../../styles";

export const Tabs = () => {
	return (
		<Tab.Group>
			<Tab.List className={TabStyles.tabListStyle}>
				<CustomTab text="Dane gospodarstwa" />
				<CustomTab text="Zmiana hasła" />
				<CustomTab text="Twoje produkty" />
			</Tab.List>
			<Tab.Panels>
				<Tab.Panel>
					<FarmData />
				</Tab.Panel>
				<Tab.Panel>
					<PasswordForm />
				</Tab.Panel>
				<Tab.Panel>
					<YourProducts />
				</Tab.Panel>
			</Tab.Panels>
		</Tab.Group>
	);
};
