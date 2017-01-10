import { combineReducers } from 'redux'

import * as ActionTypes from '../constants/actionTypes';

const initialState = {
  tabbarShow:true,
  tabbarHeight:49
};

function reducer (state = initialState, action) {
  let newState = state ;
  switch (action.type) {
    case ActionTypes.TABBAR_SHOULD_SHOW:
      newState = Object.assign({},state,{
        tabbarHeight:action.value ? 49 : 0
      });
      return newState;
    default:
      return state
  }
}

const rootReducer = combineReducers({reducer})

export default rootReducer
