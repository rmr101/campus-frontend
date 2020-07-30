// reusable axios code goes here.
// baseURL can be changed later
import axios from 'axios';

export const baseURL = "http://localhost:8080";

// for EC2 demonstration purpose:

// export const baseURL = "http://ec2-3-25-128-75.ap-southeast-2.compute.amazonaws.com:8080";

const CampusSever = axios.create({
  baseURL,
});

export default CampusSever;
