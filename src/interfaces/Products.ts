export interface ProductsProps {
	id: string;
	name: string;
	desc: string;
	price: number;
	type: string;
	category: string;
	unit: string;
	createdBy: string;
	createDate: number;
}

export interface PostProductsProps
	extends Omit<ProductsProps, "id" | "createdBy" | "createDate"> {}
