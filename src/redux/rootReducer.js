import { combineReducers } from "redux";
import { inputEnable } from "./actions";
import { CHANGE_THEME, DECREMENT,  INCREMENT,  INPUT_DISABLE } from "./types";

function counterReducer(state = 0,action) { 
    if(action.type === INCREMENT){
        return state + 1
    }else if(action.type == DECREMENT){
      return state - 1
    }
    return state
 }

 const initialThemeState = {
   value: 'light'
 }
function themeReducer(state = initialThemeState,action) { 
  switch(action.type){
    case CHANGE_THEME:
        return {...state, value: action.payload}
    default: return state
  }
}
function enabledInputReducer(state = true,action){
  return action.type != INPUT_DISABLE
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
  enabledInput: enabledInputReducer
})