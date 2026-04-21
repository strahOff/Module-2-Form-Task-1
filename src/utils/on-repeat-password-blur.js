export const onRepeatPasswordBlur = (
	password,
	repeatPassword,
	setRepeatPasswordError,
) => {
	let error = null;
	if (repeatPassword !== password) {
		error = "Пароли должны совпадать";
	}
	setRepeatPasswordError(error);
};
