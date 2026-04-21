import { useState } from "react";
import { FormLayout } from "./FormLayout";
import { onSubmit } from "./utils/on-submit";
import { onLoginChange } from "./utils/on-login-change";
import { onInputBlur } from "./utils/on-login-blur";
import { onRepeatPasswordBlur } from "./utils/on-repeat-password-blur";
import { onPasswordBlur } from "./utils/on-password-blur.js";
import { onPasswordChange } from "./utils/on-password-change";

const Form = () => {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [loginError, setLoginError] = useState("Введите логин");
	const [repeatPassword, setRepeatPassword] = useState("");
	const [repeatPasswordError, setRepeatPasswordError] = useState(null);

	return (
		<>
			<FormLayout
				setPassword={setPassword}
				repeatPasswordError={repeatPasswordError}
				passwordError={passwordError}
				setPasswordError={setPasswordError}
				repeatPassword={repeatPassword}
				setRepeatPassword={setRepeatPassword}
				setRepeatPasswordError={setRepeatPasswordError}
				onPasswordChange={onPasswordChange}
				setLoginError={setLoginError}
				setLogin={setLogin}
				onSubmit={onSubmit}
				onLoginChange={onLoginChange}
				onInputBlur={onInputBlur}
				login={login}
				loginError={loginError}
				onPasswordBlur={onPasswordBlur}
				onRepeatPasswordBlur={onRepeatPasswordBlur}
				password={password}
			/>
			{loginError && <div className="error">{loginError}</div>}
			{passwordError && <div className="error">{passwordError}</div>}
			{repeatPasswordError && (
				<div className="error">{repeatPasswordError}</div>
			)}
		</>
	);
};

export default Form;
