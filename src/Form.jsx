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
        login={login}
        loginError={loginError}
        password={password}
        passwordError={passwordError}
        repeatPassword={repeatPassword}
        repeatPasswordError={repeatPasswordError}
        onSubmit={onSubmit}
        onPasswordChange={(event) =>
          onPasswordChange(
            event,
            setPassword,
            setPasswordError,
            setRepeatPassword,
          )
        }
        onLoginChange={(event) => {
          onLoginChange(event, setLogin, setLoginError);
        }}
        onInputBlur={(event) =>
          onInputBlur(
            event,
            login,
            setLoginError,
            loginError,
            password,
            setPasswordError,
          )
        }
        onPasswordBlur={(event) => onPasswordBlur(event, setPasswordError)}
        onRepeatPasswordBlur={() =>
          onRepeatPasswordBlur(password, repeatPassword, setRepeatPasswordError)
        }
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
