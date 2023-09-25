import { useContext, useState, useEffect } from "react";

import { Data } from "../../API";
import { UserContext } from "../../context";
import {
	PostProductsProps,
	RequestTypesProp,
	RequestCategoriesProp,
	RequestUnitsProp,
	ResponseErrors,
} from "../../interfaces";
import { defaultProductState } from "./utils";
import { ButtonStyles } from "../../styles";
import { getFieldProps } from "../../components/Forms/getFieldProps";
import { gatherResponseErrors } from "../../components/validation";

export const useAddProductForm = () => {
	const { isLoggedIn, token } = useContext(UserContext);

	const [formData, setFormData] =
		useState<PostProductsProps>(defaultProductState);
	const [isLoading, setIsLoading] = useState(false);
	const [types, setTypes] = useState<RequestTypesProp>([]);
	const [categories, setCategories] = useState<RequestCategoriesProp>([]);
	const [units, setUnits] = useState<RequestUnitsProp>([]);
	const [isDisabled, setIsDisabled] = useState(false);
	const [errors, setErrors] = useState<ResponseErrors>({});
	const [buttonStyle, setButtonStyle] = useState(ButtonStyles.green.enable);

	useEffect(() => {
		setIsLoading(true);
		Promise.all([
			Data.Products.GetTypes(),
			Data.Products.GetCategories(),
			Data.Products.GetUnits(),
		])
			.then((response) => {
				setTypes(response[0] as RequestTypesProp);
				setCategories(response[1] as RequestCategoriesProp);
				setUnits(response[2] as RequestUnitsProp);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	function reset() {
		setFormData(defaultProductState);
	}

	async function submit(event: React.FormEvent<HTMLFormElement>) {
		setIsDisabled(true);
		setButtonStyle(ButtonStyles.green.disable);

		event.preventDefault();
		const response = await Data.Products.PostProduct(event, formData, token);

		const responseErrors = gatherResponseErrors(response);
		setErrors(responseErrors);

		if (response) {
			setIsDisabled(false);
			setButtonStyle(ButtonStyles.green.enable);
		}
	}

	const data = { formData, setFormData, setErrors };
	const getFieldsProps = {
		name: getFieldProps(data, "name"),
		desc: getFieldProps(data, "desc"),
		price: getFieldProps(data, "price"),
		type: getFieldProps(data, "type"),
		category: getFieldProps(data, "category"),
		unit: getFieldProps(data, "unit"),
	};

	const handles = { reset, submit };
	const states = {
		formData,
		isLoading,
		types,
		categories,
		units,
		isDisabled,
		buttonStyle,
	};

	return { isLoggedIn, getFieldsProps, handles, states, errors };
};
