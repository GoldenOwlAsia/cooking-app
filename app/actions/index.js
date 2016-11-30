import * as TYPES from '../constants/actionTypes';

handleToggleDrawer = () => {
  return {
    type: TYPES.TOGGLE_DRAWER
  }
};

export const toggleDrawer = () => {
  return (dispatch, getState) => {
    dispatch(handleToggleDrawer());
  }
};
