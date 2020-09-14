import { CHANGE_THEME, DECREMENT, INCREMENT, INIT_APP, INPUT_ENABLE,INPUT_DISABLE } from "./types";

export function increment(){
    return {
        type: INCREMENT
    }
}
export function decrement(){
    return {
        type: DECREMENT
    }
}
export function init_app(){
    return {
        type: INIT_APP
    }
}

export function inputEnable(){
    return {
        type: INPUT_ENABLE
    }
}

export function inputDisable(){
    return {
        type: INPUT_DISABLE
    }
}

export function asyncIncrement() { 
    return function(dispatch){
        dispatch(inputDisable())
        setTimeout(()=>{
            dispatch({type: INCREMENT})
            dispatch(inputEnable())
        },1000)
    }
 }

 export function changeTheme(theme){
     return {
         type: CHANGE_THEME,
         payload: theme
     }
 }