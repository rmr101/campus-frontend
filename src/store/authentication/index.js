import {applyMiddleware,combineReducers,createStore,compose} from 'redux';
import userRole from './campus/reducers/userRole';
import loginState from './campus/reducers/loginState';
import currentDirectory from './campus/reducers/currentDirectory';
import headerHistory from "./campus/reducers/headerHistory";
import navCanvasStatus from "./campus/reducers/navCanvasStatus";
import thunk from "redux-thunk";

const middleWares = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const reducer = combineReducers({
  userRole,
  loginState,
  headerHistory,
  currentDirectory,
  navCanvasStatus,
});

export default createStore(reducer, middleWares);