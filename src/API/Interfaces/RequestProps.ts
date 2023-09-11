import { CategoriesProps } from "./CategoriesProps";

export interface RequestProps {
	event: React.FormEvent<HTMLFormElement>;
	request: (() => Promise<CategoriesProps[]>) | (() => Promise<void>);
	successMessage?: string;
	errorMessage: string;
}
