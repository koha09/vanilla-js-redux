export function createStore(rootReducer,initialState) { 
    let state = rootReducer(initialState,{type: '__INIT__'})
    const subscribers = []

    return {
        // что-то произошло
        // action === {type: '',...}
        dispatch(action){
            state = rootReducer(state, action)
            subscribers.forEach(sub => sub())
        },
        // подписка
        subscribe(callback){
            subscribers.push(callback)
        },
        getState(){
            return state
        }
    }
 }