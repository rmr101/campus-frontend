import { ADD_USER_INFO } from "../type";
const initState = {
  name:"",
  avatar:"",
};

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_USER_INFO:
      return {
        name:action.name,
        avatar:action.avatar,
      };
    default:
      return state;
  }
};
