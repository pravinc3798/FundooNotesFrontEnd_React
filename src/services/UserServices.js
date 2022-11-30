// npm i axios

import axios from 'axios'

export const loginApi = (loginModel) => {
    let response = axios.post('http://localhost:19192/api/User/Login',loginModel);
    return response;
}