// reusable axios code goes here.
// baseURL can be changed later
import axios from 'axios';

const baseURL = "http://localhost:8080/";

// this will be return a promise.
export const get = (url,params) => axios.get(`${baseURL}${url}`,
  {params:{
    ...params,
    // TODO: for JWT..
  }}
)

export const post = (url, params, body) =>
         axios.post(`${baseURL}${url}`, {
           params: {
             ...params,
             // TODO: for JWT..
           },
           data: {
             ...body,
             // TODO: for JWT..
           },
         });