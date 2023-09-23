import { ListStyles } from "../../styles";

const styleFalse = ListStyles.password.false;
const styleTrue = ListStyles.password.true;

const initialText = {
	character: styleFalse,
	long: styleFalse,
	number: styleFalse,
	symbol: styleFalse,
};
const initialIcon = {
	character: "✕",
	long: "✕",
	number: "✕",
	symbol: "✕",
};

export { styleFalse, styleTrue, initialText, initialIcon };
