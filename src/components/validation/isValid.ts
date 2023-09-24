function email(email: string) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return (email && emailRegex.test(email)) as boolean;
}

function password(password: string) {
	return {
		isBig: /^(?=.*[A-Z])/.test(password),
		isSymbol: /(?=.*[!@#$%^&*])/.test(password),
		isNumber: /(?=.*[0-9])/.test(password),
		isLong: /.{8,}$/.test(password),
	};
}

export const isValid = { email, password };
