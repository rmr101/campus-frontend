import store from './../../store';
import axios from 'axios';

const baseURL = "http://localhost:8080";
const CampusSever = axios.create({
  baseURL,
});
const state = store.getState();
const jwt = state.Authentication.jwt;
console.log(jwt);
//Injection 
const enrichCampusSeverWithJWT = (config) =>
{
  config.headers.authorization = `Bearer ${jwt}`;
  console.log(config);
  return config;
}

CampusSever.interceptors.request.use(enrichCampusSeverWithJWT);

export default CampusSever;