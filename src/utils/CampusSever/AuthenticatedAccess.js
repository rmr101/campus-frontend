import store from './../../store';
import {redirectToLogin} from '../../utils/NetworkService/NetworkService';

//Injection 

const enrichCampusSeverWithJWT = (config) =>
{
  const state = store.getState();
  const jwt = state.Authentication.jwt;
  config.headers.authorization = `Bearer ${jwt}`;
  return config;
}

export const Auth = (AxiosInstance) => {
  AxiosInstance.interceptors.request.use(enrichCampusSeverWithJWT);
  // Error management //
  AxiosInstance.interceptors.response.use(res=>res,handleError);
  return AxiosInstance;
};

const handleError = (err) => {
  switch(err.response.status){
    case 401:
      console.log("I am logging out due to 401");
      redirectToLogin();
      return Promise.reject(err);
    default:
      return Promise.reject(err);
  }
};