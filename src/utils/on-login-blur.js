export const onInputBlur = (
  event,
  login,
  setLoginError,
  loginError,
  password,
  setPasswordError,
  loginBlurScheme,
  validateAndGetErrorMessage,
) => {
  const error = validateAndGetErrorMessage(loginBlurScheme, login);
  setLoginError(error);
  if (loginError === null) {
    if (password.length === 0) {
      setPasswordError("Введите пароль");
    }
  }
};
