import store from '../../store';
import LogOut from '../../store/authentication/actions/LogOut';
// dispatch action to redux store.

export const redirectToLogin=()=>{
  store.dispatch(LogOut());
};
