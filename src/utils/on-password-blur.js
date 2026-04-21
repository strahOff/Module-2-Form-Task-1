export const onPasswordBlur = ({ target }, setPasswordError) => {
	let error = null;
	if (target.value.length < 8 && target.value.length > 0) {
		error = "Пароль должен содержать не менее 8 символов.";
	} else if (!/[A-Z]/.test(target.value) && target.value.length > 0) {
		error = "Пароль должен содержать хотя бы одну заглавную букву.";
	} else if (!/[a-z]/.test(target.value) && target.value.length > 0) {
		error = "Пароль должен содержать хотя бы одну строчную букву.";
	} else if (
		!/[!@#$%^&*(),.?":{}|<>/]/.test(target.value) &&
		target.value.length > 0
	) {
		error =
			"Пароль должен содержать хотя бы один специальный символ !@#$%^&*(),.?";
	} else if (!/[0-9]/.test(target.value)) {
		error = "Пароль должен содержать хотя бы одину цифру";
	}
	setPasswordError(error);
};
