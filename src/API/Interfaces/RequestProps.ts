import { EventProps } from "./EventProps";
import { CategoriesProps } from "./CategoriesProps";

export interface RequestProps extends EventProps {
	request: (() => Promise<CategoriesProps[]>) | (() => Promise<void>);
	successMessage?: string;
	errorMessage: string;
}
