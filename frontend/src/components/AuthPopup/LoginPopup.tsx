import { Formik, Field, Form } from "formik";
import "./Auth.scss";
import { LoginSchema } from "../../helpers/validationSchemas";

const LoginPopup = () => {
  return (
    <div className="auth">
      <h2 className="auth-heading">Вход в аккаунт</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log("submit", values)}
        validationSchema={LoginSchema}
        validateOnChange
        validateOnBlur
      >
        {({ errors, touched, isSubmitting }) => (
          <div className="auth-wrapper">
            <Form>
              <Field
                name="email"
                placeholder="Почта"
                type="email"
                className={`${touched.email && errors.email ? "error" : ""}`}
              />
              {touched.email && errors.email ? (
                <p className="error-text">{errors.email}</p>
              ) : null}
              <Field
                name="password"
                placeholder="Пароль"
                type="password"
                className={`${
                  touched.password && errors.password ? "error" : ""
                }`}
              />
              {touched.password && errors.password ? (
                <p className="error-text">{errors.password}</p>
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
