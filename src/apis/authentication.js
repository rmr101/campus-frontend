import axios from 'axios';

//TODO: 后端要提供一个接口给我validate 我的jwt

//TODO: 以后说不定要改这个base。现在因为后端不能接受带null的authentication 额外创的。
const baseURL = "http://192.168.0.120:8080";
const AuthUrl = "/authenticate";


// No interceptor login
export const login = (username, password) =>
         axios.post(baseURL+AuthUrl, { username, password });

