export const onLoginChange = ({ target }, setLogin, setLoginError) => {
	setLogin(target.value);
	let error = null;
	if (!/^[\w_]*$/.test(target.value)) {
		error =
			"Неверный логин. Дупустимые символы - буквы, цифры и нежнее подчеркивание.";
	} else if (target.value.length >= 20) {
		error = "Неверный логин. Логин должен содердать не более 20 символовы";
	}

	setLoginError(error);
};
