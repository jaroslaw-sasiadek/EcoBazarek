import { ResponseErrors } from "../../../../interfaces";

type InputsProps<K extends keyof T, T> = {
	name: K;
	value: T[K];
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const getFieldProps = <T, K extends keyof T>(
	key: K,
	{
		data,
		setData,
		setErrors,
	}: {
		data: T;
		setData: React.Dispatch<React.SetStateAction<T>>;
		setErrors: React.Dispatch<React.SetStateAction<ResponseErrors>>;
	}
): InputsProps<K, T> => ({
	name: key,
	value: data[key],
	onChange: (event) => {
		setErrors((previous) => {
			const current = { ...previous };
			delete current[key as string];
			return current;
		});
		setData((previous) => ({
			...previous,
			[key]: event.target.value,
		}));
	},
});
