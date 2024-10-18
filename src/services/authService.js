import axios from 'axios';
import Cookies from 'js-cookie';

export const authService = {
    async login(data) {
        const result = await axios.post('/Login', data);
        Cookies.set('notjwttoken', result.data);
    },
    async registration(data) {
        const { name, middleName, lastName, login, password } = data;
        const postData = {
            "employee": {
              "name": name,
              "middleName": middleName,
              "lastName": lastName,
              "position": "",
              "previousPositions": [],
              "currentConpartmentID": 0,
              "photo": "",
              "certificates": [],
              "login": login,
              "notifications": [],
              "hashedPassword": ""
            },
            "password": password
        };

        const result = await axios.post('/Register', postData);
        Cookies.set('notjwttoken', result.data);
    }
};