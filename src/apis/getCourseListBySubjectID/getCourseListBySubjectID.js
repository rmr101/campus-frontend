import {get} from '../../utils/CampusSever/CampusSever';

// make it empty for now

const url = 'subjects/';
const params ={};

export default (id) =>
  get(`${url}${id}`, params)
  .then((res) => (res.data))
  .catch(e => console.log(e));
  ;