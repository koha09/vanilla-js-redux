import './styles.css'
import { rootReducer } from './redux/rootReducer'
import { decrement, increment, init_app,asyncIncrement, changeTheme,inputEnable,inputDisable } from './redux/actions'
import { applyMiddleware ,createStore,compose } from 'redux'
import thunk from 'redux-thunk'
import logger from './redux/middlewareLogger'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')


const store = createStore(rootReducer, compose(
    applyMiddleware(thunk,logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));
window.store = store

addBtn.addEventListener('click',()=>{
    window.store.dispatch(increment())
})
subBtn.addEventListener('click',()=>{
    window.store.dispatch(decrement())
})
asyncBtn.addEventListener('click',()=>{
    window.store.dispatch(inputDisable())
    window.store.dispatch(asyncIncrement())
})
themeBtn.addEventListener('click',()=>{
    const newTheme = document.body.classList.contains("light")
      ? "dark"
      : "light";
    window.store.dispatch(changeTheme(newTheme))
})
window.store.subscribe(()=>{
    counter.textContent = window.store.getState().counter
    document.body.className = window.store.getState().theme.value
    addBtn.disabled = subBtn.disabled = asyncBtn.disabled = changeTheme.disabled = !window.store.getState().enabledInput
})
store.dispatch(init_app())