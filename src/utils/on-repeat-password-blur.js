export const onRepeatPasswordBlur = (
	password,
	repeatPassword,
	setRepeatPasswordError,
) => {
	let error = null;
	if (repeatPassword !== password) {
		console.log(password, repeatPassword);
		error = "Пароли должны совпадать";
	}
	setRepeatPasswordError(error);
};
