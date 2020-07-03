import CampusSever from "../../utils/CampusSever/AuthenticatedAccess";
// make it empty for now
const url = "/subjects"
const config ={};

export default () =>
  CampusSever.get(url, config).then(res => res.data).catch(e => console.log(e));
  ;