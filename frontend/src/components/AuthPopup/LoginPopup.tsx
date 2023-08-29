import * as React from "react";
import { Formik, Field, Form } from "formik";
import s from "./Auth.module.scss";
import { LoginSchema } from "../../helpers/validationSchemas";

const LoginPopup: React.FC = () => {
  return (
    <div className={s.auth}>
      <h2 className={s.heading}>Вход в аккаунт</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log("submit", values)}
        validationSchema={LoginSchema}
        validateOnChange
        validateOnBlur
      >
        {({ errors, touched, isSubmitting }) => (
          <div className={s.wrapper}>
            <Form>
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

export default LoginPopup;
