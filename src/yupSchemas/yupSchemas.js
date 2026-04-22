import * as yup from "yup";

export const loginChangeScheme = yup
  .string()
  .matches(
    /^[\w_]*$/,
    "Неверный логин. Дупустимые символы - буквы, цифры и нежнее подчеркивание.",
  )
  .max(20, "Неверный логин. Логин должен содердать не более 20 символовы");

export const loginBlurScheme = yup
  .string()
  .min(3, "Неверный логин. Должено быть не менее 3 символов.");
