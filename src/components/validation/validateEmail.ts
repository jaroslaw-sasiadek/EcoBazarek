export function validateEmail(
	event: React.FormEvent<HTMLFormElement>,
	email: string
) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	let isValid = true;

	if (!email || !emailRegex.test(email)) isValid = false;

	event.preventDefault();
	return isValid;
}
