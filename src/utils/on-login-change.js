export const onLoginChange = (
  { target },
  loginChangeScheme,
  validateAndGetErrorMessage,
  setLogin,
  setLoginError,
) => {
  setLogin(target.value);

  const error = validateAndGetErrorMessage(loginChangeScheme, target.value);

  setLoginError(error);
};
