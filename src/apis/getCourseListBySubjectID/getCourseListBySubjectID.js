import CampusSever from "../../utils/CampusSever";

// make it empty for now

const url = 'subjects/';
const config ={};

export default (id) =>
  CampusSever.get(`${url}${id}`, config)
    .then((res) => res.data)
    .catch((e) => console.log(e));
  ;