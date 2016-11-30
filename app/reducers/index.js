import { combineReducers } from 'redux';
import * as TYPES from '../constants/actionTypes';

const index = (state = { isOpeningDrawer: false }, action ) => {
  switch(action.type) {
    case TYPES.TOGGLE_DRAWER:
      return Object.assign({}, state, {isOpeningDrawer: !state.isOpeningDrawer});
    default: return state;
  }
}

const rootReducer = combineReducers({
  index
});

export default rootReducer;
