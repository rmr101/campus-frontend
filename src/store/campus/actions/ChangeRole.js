import {CHANGE_ROLE} from '../../type';

export default (role) => ({
  type: CHANGE_ROLE,
  payload: role,
})