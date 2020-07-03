// reusable axios code goes here.
// baseURL can be changed later
import axios from 'axios';

const baseURL = "http://localhost:8080";
const CampusSever = axios.create({
  baseURL,
});

export default CampusSever;
