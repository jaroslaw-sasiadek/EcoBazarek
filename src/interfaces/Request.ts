import {
	CategoriesProps,
	LoginUserResponse,
	ProductsProps,
	UnitsProps,
} from ".";
import { TypesProps } from ".";

export type RequestVoidProp = "error" | void;
export type RequestCategoriesProp = "error" | CategoriesProps[];
export type RequestTypesProp = "error" | TypesProps[];
export type RequestLoginProp = "error" | LoginUserResponse;
export type RequestProductsProp = "error" | ProductsProps[];
export type RequestUnitsProp = "error" | UnitsProps[];

export type RequestAllProp =
	| RequestVoidProp
	| RequestCategoriesProp
	| RequestTypesProp
	| RequestLoginProp
	| RequestProductsProp
	| RequestUnitsProp;

export interface RequestProps {
	event?:
		| React.FormEvent<HTMLFormElement>
		| React.MouseEvent<HTMLInputElement, MouseEvent>;
	request: () => Promise<RequestAllProp>;
	successMessage?: string;
	errorMessage: string;
}
