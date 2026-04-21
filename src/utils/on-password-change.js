export const onPasswordChange = (
	{ target },
	setPassword,
	setPasswordError,
	setRepeatPassword,
) => {
	if (target.name === "password") {
		setPassword(target.value);
		let error = null;
		if (target.value.length > 20) {
			error = "Пароль должен быть меньше 20 символов";
		}
		setPasswordError(error);
	} else if (target.name === "repeat-password") {
		setRepeatPassword(target.value);
	}
};
