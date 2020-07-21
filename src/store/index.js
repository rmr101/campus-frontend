import {applyMiddleware,combineReducers,createStore,compose} from 'redux';
import headerHistory from "./campus/reducers/headerHistory";
import Authentication from './authentication/reducers/Authentication';
import userInfo from './campus/reducers/userInfo';
import thunk from "redux-thunk";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  headerHistory,
  Authentication,
  userInfo,
});

export default createStore(reducer,composeEnhancers(
  applyMiddleware(thunk)
));