import {applyMiddleware,combineReducers,createStore,compose} from 'redux';
import currentDirectory from './campus/reducers/currentDirectory';
import headerHistory from "./campus/reducers/headerHistory";
import Authentication from './authentication/reducers/Authentication';
import navCanvasStatus from "./campus/reducers/navCanvasStatus";
import thunk from "redux-thunk";

const middleWares = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const reducer = combineReducers({
  headerHistory,
  currentDirectory,
  navCanvasStatus,
  Authentication,
});

export default createStore(reducer, middleWares);