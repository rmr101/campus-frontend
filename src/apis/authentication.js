import axios from 'axios';
import {baseURL} from '../utils/CampusSever/CampusSever';

const AuthUrl = "/authenticate";


// No interceptor login
export const login = (username, password) =>
         axios.post(baseURL+AuthUrl, { username, password });

