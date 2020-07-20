import { ADD_USER_INFO, ADD_USER_AVATAR } from "../type";



const initState = {
  name:"",
  avatar:"",
};

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_USER_INFO:
      return {
        name:action.name, 
        avatar: state.avatar
      };
    case ADD_USER_AVATAR:
      return {
        name: state.name,
        avatar: action.avatar,
      };
    default:
      return state;
  }
};
