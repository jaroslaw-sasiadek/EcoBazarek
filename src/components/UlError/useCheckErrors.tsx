import { useEffect, useState } from "react";
import { isValid } from "../validation";
import { initialIcon, initialText, styleFalse, styleTrue } from "./utils";

export const useCheckErrors = (password: string) => {
	const [text, setText] = useState(initialText);
	const [icon, setIcon] = useState(initialIcon);

	useEffect(() => {
		const updateState = () => {
			const validation = isValid.password(password);
			setText({
				character: validation.isBig ? styleTrue : styleFalse,
				long: validation.isLong ? styleTrue : styleFalse,
				number: validation.isNumber ? styleTrue : styleFalse,
				symbol: validation.isSymbol ? styleTrue : styleFalse,
			});
			setIcon({
				character: validation.isBig ? "✓" : "✕",
				long: validation.isLong ? "✓" : "✕",
				number: validation.isNumber ? "✓" : "✕",
				symbol: validation.isSymbol ? "✓" : "✕",
			});
		};
		updateState();
	}, [password]);

	return { text, icon };
};
