import { Formik, Form, Field } from "formik";
import "./Auth.scss";
import { RegisterSchema } from "../../helpers/validationSchemas";

const RegisterPopup = () => {
  return (
    <div className="auth">
      <h2 className="auth-heading">Регистрация</h2>
      <Formik
        initialValues={{ name: "", nickname: "", email: "", password: "" }}
        onSubmit={(values) => console.log("submit", values)}
        validationSchema={RegisterSchema}
        validateOnChange={true}
        validateOnBlur={true}
      >
        {({ errors, touched, isSubmitting }) => (
          <div className="auth-wrapper">
            <Form>
              <Field
                name="name"
                placeholder="Имя"
                className={`${touched.name && errors.name ? "error" : ""}`}
              />
              {touched.name && errors.name ? (
                <p className="error-text">{errors.name}</p>
              ) : null}
              <Field
                name="nickname"
                placeholder="Никнейм"
                className={`${
                  touched.nickname && errors.nickname ? "error" : ""
                }`}
              />
              {touched.nickname && errors.nickname ? (
                <p className="error-text">{errors.nickname}</p>
              ) : null}
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

export default RegisterPopup;
