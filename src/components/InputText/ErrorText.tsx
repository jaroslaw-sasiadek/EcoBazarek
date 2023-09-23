import { SpanStyles } from "../../styles";

export const ErrorText = ({ text }: { text: string }) => {
	return <span className={SpanStyles.error}>{text}</span>;
};
