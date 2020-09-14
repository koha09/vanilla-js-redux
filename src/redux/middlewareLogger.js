export default function logger(state) {
    return function(next) {
        return function (action) { 
            console.log('Action', action.type)
            const prevState = state.getState()
            const newState = next(action)
            console.log('State',prevState,state.getState())
            return newState
         }
    }
}