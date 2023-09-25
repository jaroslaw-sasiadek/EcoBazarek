export const getFieldProps = <T, E, K extends keyof T & keyof E>(
	data: {
		formData: T;
		setFormData: React.Dispatch<React.SetStateAction<T>>;
		setErrors: React.Dispatch<React.SetStateAction<E>>;
	},
	key: K
): {
	name: K;
	value: T[K];
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} => ({
	name: key,
	value: data.formData[key],
	onChange: (event) => {
		data.setErrors((previous) => {
			const current = { ...previous };
			delete current[key];
			return current;
		});
		data.setFormData((previous) => ({
			...previous,
			[key]: event.target.value,
		}));
	},
});
