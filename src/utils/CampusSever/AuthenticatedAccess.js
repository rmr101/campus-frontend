import CampusSever from './CampusSever';
import store from './../../store';

const state = store.getState();
const jwt = state.Authentication.jwt,

//Injection 
const enrichCampusSeverWithJWT = (config) =>
config.headers.Authorization = `Bearer ${jwt}`;

CampusSever.interceptors.request.use(enrichCampusSeverWithJWT);

export default CampusSever;