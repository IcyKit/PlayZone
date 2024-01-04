import * as React from "react";
import { Formik, Form, Field } from "formik";
import s from "./Auth.module.scss";
import { RegisterSchema } from "../../helpers/validationSchemas";

const RegisterPopup: React.FC = () => {
  return (
    <div className={s.auth}>
      <h2 className={s.heading}>Регистрация</h2>
      <Formik
        initialValues={{ name: "", nickname: "", email: "", password: "" }}
        onSubmit={(values) => console.log("submit", values)}
        validationSchema={RegisterSchema}
        validateOnChange={true}
        validateOnBlur={true}
      >
        {({ errors, touched, isSubmitting }) => (
          <div className={s.wrapper}>
            <Form>
              <Field
                name="name"
                placeholder="Имя"
                className={`${touched.name && errors.name ? s.error : ""}`}
              />
              {touched.name && errors.name ? (
                <p className={s.errorText}>{errors.name}</p>
              ) : null}
              <Field
                name="nickname"
                placeholder="Никнейм"
                className={`${
                  touched.nickname && errors.nickname ? s.error : ""
                }`}
              />
              {touched.nickname && errors.nickname ? (
                <p className={s.errorText}>{errors.nickname}</p>
              ) : null}
              <Field
                name="email"
                placeholder="Почта"
                type="email"
                className={`${touched.email && errors.email ? s.error : ""}`}
              />
              {touched.email && errors.email ? (
                <p className={s.errorText}>{errors.email}</p>
              ) : null}
              <Field
                name="password"
                placeholder="Пароль"
                type="password"
                className={`${
                  touched.password && errors.password ? s.error : ""
                }`}
              />
              {touched.password && errors.password ? (
                <p className={s.errorText}>{errors.password}</p>
              ) : null}
              <button type="submit" disabled={isSubmitting}>
                Войти
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default RegisterPopup;
