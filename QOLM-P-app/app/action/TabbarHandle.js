import * as ActionTypes from '../constants/actionTypes'

export function ShowTabBar (argument) {
  return {
    type: ActionTypes.TABBAR_SHOULD_SHOW,
    value:argument
  }
}
