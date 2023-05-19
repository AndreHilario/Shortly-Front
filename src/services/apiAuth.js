import axios from "axios";

export const port = process.env.REACT_APP_API_URL;

function signup(form) {

    const promise = axios.post(`${port}/signup`, form);
    return promise;
};

function login(form) {

    const promise = axios.post(`${port}/signin`, form);
    return promise;
};






const apiAuth = { signup, login };
export default apiAuth;