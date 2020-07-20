import {applyMiddleware,combineReducers,createStore,compose} from 'redux';
import headerHistory from "./campus/reducers/headerHistory";
import Authentication from './authentication/reducers/Authentication';
import userInfo from './campus/reducers/userInfo';
import thunk from "redux-thunk";

const middleWares = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const reducer = combineReducers({
  headerHistory,
  Authentication,
  userInfo,
});

export default createStore(reducer, middleWares);