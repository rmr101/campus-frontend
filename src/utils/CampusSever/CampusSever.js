// reusable axios code goes here.
// baseURL can be changed later
import axios from 'axios';

const baseURL = "http://192.168.0.120:8080";
const CampusSever = axios.create({
  baseURL,
});

export default CampusSever;
