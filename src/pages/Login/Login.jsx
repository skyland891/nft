import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { authService } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Cookies from 'js-cookie';


const Login = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        login: Yup.string().required('Логин обязателен'),
        password: Yup.string()
          .min(6, 'Пароль должен содержать минимум 6 символов')
          .required('Пароль обязателен'),
      });

    const handleSubmit = async (values) => {
        await authService.login(values);
        navigate('/employee-profile');
    };

    return (
        <Formik
          initialValues={{ login: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
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
              <button type="submit">Войти</button>
            </Form>
          )}
        </Formik>
    );
    
};

export default Login;