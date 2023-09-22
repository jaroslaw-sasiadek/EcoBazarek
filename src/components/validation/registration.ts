import { UserCreateProps } from "../../interfaces";
import { email } from "./email";
import { password } from "./password";

export function registration(data: UserCreateProps) {
	const dataUnknown = { ...data } as unknown as Record<string, string>;
	const isValue = {} as Record<string, boolean>;

	for (const key in dataUnknown) {
		isValue[key] = !!dataUnknown[key];
	}
	isValue.email = email(data.email);
	isValue.password = password(data.password);

	return isValue;
}
