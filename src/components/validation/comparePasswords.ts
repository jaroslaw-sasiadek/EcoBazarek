export function comparePasswords(password: string, otherPassword: string) {
	if (password !== otherPassword) {
		const message = "Hasła muszą się zgadzać!";
		const errors = { newPassword: message, repeatNewPassword: message };
		return errors;
	}
	return {};
}
