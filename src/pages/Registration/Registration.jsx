import React, {useState} from 'react';
import { authService } from '../../services/authService';

const Registration = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeLogin = e => {
        setLogin(e.target.value)
    };

    const handleChangePassword = e => {
        setPassword(e.target.value)
    };

    const handleSubmitForm = () => {
        // здесь будет запрос
        authService.registration(login, password);
    };

    return (
        <form>
            <label htmlFor='login'>Логин</label>
            <input id='login' onChange={handleChangeLogin}/>
            <label htmlFor='password'>Пароль</label>
            <input id='password' type='password' onChange={handleChangePassword}/>
            <button onClick={handleSubmitForm}>Зарегестрироваться</button>
        </form>
    );
};

export default Registration;