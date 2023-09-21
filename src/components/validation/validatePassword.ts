export function validatePassword(
	event: React.FormEvent<HTMLFormElement>,
	password: string
) {
	const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
	let isValid = true;

	if (!password || !passwordRegex.test(password)) isValid = false;

	event.preventDefault();
	return isValid;
}
