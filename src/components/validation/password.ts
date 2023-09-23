export function password(password: string) {
	return {
		isBig: /^(?=.*[A-Z])/.test(password),
		isSymbol: /(?=.*[!@#$%^&*])/.test(password),
		isNumber: /(?=.*[0-9])/.test(password),
		isLong: /.{8,}$/.test(password),
	};
}
