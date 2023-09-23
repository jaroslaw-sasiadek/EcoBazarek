import { ContactProps } from "../../interfaces";

export const defaultContactState = (): ContactProps => ({
	fullName: "",
	email: "",
	phone: "",
	subject: "",
	message: "",
});
