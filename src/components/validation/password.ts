export function password(password: string) {
	const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
	return (password && passwordRegex.test(password)) as boolean;
}
