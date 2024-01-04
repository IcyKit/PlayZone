import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Неверный формат").required("Обязательное поле"),
  password: Yup.string()
    .min(2, "Слишком короткo")
    .required("Обязательное поле"),
});

export const RegisterSchema = Yup.object().shape({
  name: Yup.string().min(2, "Слишком коротко"),
  nickname: Yup.string()
    .min(2, "Слишком коротко")
    .required("Обязательное поле"),
  email: Yup.string().email("Неверный формат").required("Обязательное поле"),
  password: Yup.string()
    .min(2, "Слишком коротко")
    .required("Обязательное поле"),
});
