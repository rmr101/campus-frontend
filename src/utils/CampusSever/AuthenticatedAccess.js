import store from './../../store';


//Injection 

const enrichCampusSeverWithJWT = (config) =>
{
  const state = store.getState();
  const jwt = state.Authentication.jwt;
  config.headers.authorization = `Bearer ${jwt}`;
  return config;
}

export const Auth = (AxiosInstance) => {
  console.log("I am enriching jwt");
  AxiosInstance.interceptors.request.use(enrichCampusSeverWithJWT);
  return AxiosInstance;
};