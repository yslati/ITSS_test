import Axios from "axios";
import Cookies from "js-cookie";

export const url = "http://localhost:4000";

let token_jwt = Cookies.get('token') || null;

export const headers = {
    'Accept': 'application/json', 
    'Content-Type': 'application/json',
    'authorization': ''
};


if (token_jwt)
    headers["authorization"] = `Bearer ${token_jwt}`;


const api = Axios.create({
    baseURL: url,
    headers: headers
});

export default api;