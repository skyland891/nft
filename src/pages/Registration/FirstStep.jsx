import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FirstStep = ({ onNext }) => {
  const validationSchema = Yup.object({
    login: Yup.string().required('Логин обязателен'),
    password: Yup.string()
      .min(6, 'Пароль должен содержать минимум 6 символов')
      .required('Пароль обязателен'),
  });

  return (
    <Formik
      initialValues={{ login: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={onNext}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor="login">Логин</label>
            <Field name="login" type="text" />
            <ErrorMessage name="login" component="div" />
          </div>
          <div>
            <label htmlFor="password">Пароль</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <button type="submit">Продолжить</button>
        </Form>
      )}
    </Formik>
  );
};

export default FirstStep;
