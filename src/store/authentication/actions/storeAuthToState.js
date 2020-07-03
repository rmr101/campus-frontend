import {STORE_AUTH_TO_STATE } from '../../type';

export default (data) => {
  return {
    payload:data,
    type:STORE_AUTH_TO_STATE,
  }
};