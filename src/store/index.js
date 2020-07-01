import {applyMiddleware,combineReducers,createStore,compose} from 'redux';
import userRole from './campus/reducers/userRole';
import loginState from './campus/reducers/loginState';
import thunk from "redux-thunk";

const middleWares = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const reducer = combineReducers({
  userRole,
  loginState,
});

export default createStore(reducer, middleWares);