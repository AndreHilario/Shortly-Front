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

function getConfig(token) {
    return {
        headers: { Authorization: `Bearer ${token}` }
    };
};

function getUrlsUser(token) {

    const config = getConfig(token);
    const response = axios.get(`${port}/users/me`, config);

    return response;

};

function postShortenUrl(token, form) {

    const config = getConfig(token);
    const promise = axios.post(`${port}/urls/shorten`, form, config);

    return promise;
}

function getRankingUser(token) {

    const config = getConfig(token);
    const response = axios.get(`${port}/ranking`, config);

    return response;

}

function getRanking() {

    const response = axios.get(`${port}/ranking`);

    return response;
}
const apiAuth = { signup, login, getUrlsUser, postShortenUrl, getRankingUser, getRanking };
export default apiAuth;