import { useState, useEffect } from "react";

import { Data } from "../../API";
import { RequestCategoriesProp } from "../../interfaces";

export function useGetData() {
	const [loading, setLoading] = useState(false);
	const [topCategories, setTopCategories] = useState<RequestCategoriesProp>([]);
	useEffect(() => {
		setLoading(true);
		Promise.all([
			Data.Products.GetTopCategories(),
			Data.Products.GetTopCategories(), // Products goes here
		])
			.then((response) => {
				setTopCategories(response[0] as RequestCategoriesProp);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);
	return { loading, topCategories };
}
