import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SecondStep = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Имя обязательно'),
    middleName: Yup.string().required('Фамилия обязательна'),
    lastName: Yup.string().required('Фамилия обязательна'),
    birthDay: Yup.string().required('Дата рождения обязательна')
  });

  return (
    <Formik
      initialValues={{ name: '', middleName: '', lastName: '', birthDay: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor="name">Имя</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="middleName">Фамилия</label>
            <Field name="middleName" type="text" />
            <ErrorMessage name="middleName" component="div" />
          </div>
          <div>
            <label htmlFor="lastName">Отчество</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="div" />
          </div>
          <div>
            <label htmlFor="birthDay">Дата рождения</label>
            <Field name="birthDay" type="text" />
            <ErrorMessage name="birthDay" component="div" />
          </div>
          <button type="submit">Зарегистрироваться</button>
        </Form>
      )}
    </Formik>
  );
};

export default SecondStep;
