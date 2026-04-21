import "./App.css";

export const FormLayout = ({
	setPassword,
	repeatPasswordError,
	repeatPassword,
	passwordError,
	setRepeatPassword,
	onSubmit,
	login,
	onLoginChange,
	onInputBlur,
	loginError,
	password,
	setLogin,
	setLoginError,
	onPasswordChange,
	onPasswordBlur,
	onRepeatPasswordBlur,
	setRepeatPasswordError,
	setPasswordError,
}) => {
	return (
		<form onSubmit={() => onSubmit(event, login, password)}>
			<input
				name="login"
				type="text"
				value={login}
				placeholder="Логин"
				onChange={() => onLoginChange(event, setLogin, setLoginError)}
				onBlur={() =>
					onInputBlur(
						event,
						login,
						setLoginError,
						loginError,
						password,
						setPasswordError,
					)
				}
			/>
			<input
				name="password"
				type="text"
				value={password}
				placeholder="Пароль"
				onChange={() =>
					onPasswordChange(
						event,
						setPassword,
						setPasswordError,
						setRepeatPassword,
					)
				}
				onBlur={() => onPasswordBlur(event, setPasswordError)}
			/>
			<input
				name="repeat-password"
				type="text"
				placeholder="Повторите пароль"
				value={repeatPassword}
				onChange={() =>
					onPasswordChange(
						event,
						setPassword,
						setPasswordError,
						setRepeatPassword,
					)
				}
				onBlur={() =>
					onRepeatPasswordBlur(
						password,
						repeatPassword,
						setRepeatPasswordError,
					)
				}
			/>
			<button
				type="submit"
				disabled={loginError || passwordError || repeatPasswordError}
			>
				Зарегистрироваться
			</button>
		</form>
	);
};
