import store from '../../store';
import LogOut from '../../store/authentication/actions/LogOut';
// dispatch action to redux store.

//TODO: LogOut 目前不刷新页面，不回去dashboard。
export const redirectToLogin=()=>{
  store.dispatch(LogOut());
};
