export const onInputBlur = (
	event,
	login,
	setLoginError,
	loginError,
	password,
	setPasswordError,
) => {
	let error = null;
	if (login.length <= 3 && login.length > 0) {
		error = "Неверный логин. Должен быть больше 3 символов.";
		setLoginError(error);
	}
	if (loginError === null) {
		if (password.length === 0) {
			setPasswordError("Введите пароль");
		}
	}
};
