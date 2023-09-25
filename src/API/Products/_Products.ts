import { GetTopCategories } from "./GetTopCategories";
import { GetProducts } from "./GetProducts";
import { GetProductsId } from "./GetProductsId";
import { GetProductsIdImageId } from "./GetProductsIdImageId";
import { GetCategories } from "./GetCategories";
import { GetUnits } from "./GetUnits";
import { GetTypes } from "./GetTypes";
import { PostProduct } from "./PostProduct";

const handleProducts = {
	GetTopCategories,
	GetProducts,
	GetProductsId,
	GetProductsIdImageId,
	GetCategories,
	GetUnits,
	GetTypes,
	PostProduct,
};

export { handleProducts as Products };
