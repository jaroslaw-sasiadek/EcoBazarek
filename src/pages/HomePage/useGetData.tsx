import { useState, useEffect } from "react";

import { Data } from "../../API";
import { RequestCategoriesProp, RequestProductsProp } from "../../interfaces";

export function useGetData() {
	const [loading, setLoading] = useState(false);
	const [topCategories, setTopCategories] = useState<RequestCategoriesProp>([]);
	const [products, setProducts] = useState<RequestProductsProp>([]);

	useEffect(() => {
		setLoading(true);
		Promise.all([Data.Products.GetTopCategories(), Data.Products.GetProducts()])
			.then((response) => {
				setTopCategories(response[0] as RequestCategoriesProp);
				setProducts(response[1] as RequestProductsProp);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);
	return { loading, topCategories, products };
}
