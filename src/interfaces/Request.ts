import { CategoriesProps, LoginUserResponse } from ".";

export type RequestVoidProp = "error" | void;
export type RequestCategoriesProp = "error" | CategoriesProps[];
export type RequestLoginProp = "error" | LoginUserResponse;

export type RequestAllProp =
	| RequestVoidProp
	| RequestCategoriesProp
	| RequestLoginProp;

export interface RequestProps {
	event?: React.FormEvent<HTMLFormElement>;
	request: () => Promise<RequestAllProp>;
	successMessage?: string;
	errorMessage: string;
}
