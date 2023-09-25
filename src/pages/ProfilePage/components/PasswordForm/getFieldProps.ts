import { ResponseErrors } from "../../../../interfaces";

export const getFieldProps = <T>(
	keys: (keyof T)[],
	data: T,
	setFormData: React.Dispatch<React.SetStateAction<T>>,
	setErrors: React.Dispatch<React.SetStateAction<ResponseErrors>>
) => {
	const fieldPropsMap: Record<string, unknown> = {};

	keys.forEach((key) => {
		fieldPropsMap[key as string] = {
			name: key as string,
			value: data[key],
			onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
				setErrors((previous) => {
					const current = { ...previous };
					delete current[key as string];
					return current;
				});
				setFormData((previous) => ({
					...previous,
					[key]: event.target.value,
				}));
			},
		};
	});

	return fieldPropsMap;
};
