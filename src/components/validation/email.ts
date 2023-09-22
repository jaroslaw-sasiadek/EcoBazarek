export function email(email: string) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return (email && emailRegex.test(email)) as boolean;
}
