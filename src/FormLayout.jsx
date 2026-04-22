import "./App.css";

export const FormLayout = ({
  repeatPasswordError,
  repeatPassword,
  passwordError,
  onSubmit,
  login,
  onLoginChange,
  onInputBlur,
  loginError,
  password,
  onPasswordChange,
  onPasswordBlur,
  onRepeatPasswordBlur,
}) => {
  return (
    <form onSubmit={(event) => onSubmit(event, login, password)}>
      <input
        name="login"
        type="text"
        value={login}
        placeholder="Логин"
        onChange={onLoginChange}
        onBlur={onInputBlur}
      />
      <input
        name="password"
        type="text"
        value={password}
        placeholder="Пароль"
        onChange={onPasswordChange}
        onBlur={onPasswordBlur}
      />
      <input
        name="repeat-password"
        type="text"
        placeholder="Повторите пароль"
        value={repeatPassword}
        onChange={onPasswordChange}
        onBlur={onRepeatPasswordBlur}
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
