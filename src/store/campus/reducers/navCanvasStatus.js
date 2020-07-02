import {
  TOGGLE_CANVAS,
  SET_CANVAS_CURRENT,
  SET_CANVAS_STATUS,
} from "../../type";

const initState = {
  canvasOn: false,
  current: "Dashboard",
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_CANVAS_CURRENT:
      return {
        canvasOn: state.canvasOn,
        current:action.name
      };
    case TOGGLE_CANVAS:
      return {
        canvasOn: !state.canvasOn,
        current: state.current,
      };
    case SET_CANVAS_STATUS:
      return {
        canvasOn: action.boolean,
        current: state.current,
      };
    default:
      return state;
  }
}