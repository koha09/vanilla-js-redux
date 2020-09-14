import './styles.css'
import {createStore} from 'redux'
import { rootReducer } from './redux/rootReducer'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

const store = createStore(rootReducer,0)
window.store = store

addBtn.addEventListener('click',()=>{
    window.store.dispatch({type:'INCREMENT'})
})
subBtn.addEventListener('click',()=>{
    window.store.dispatch({type:'DECREMENT'})
})
asyncBtn.addEventListener('click',()=>{
})
themeBtn.addEventListener('click',()=>{
})
window.store.subscribe(()=>{
    counter.textContent = window.store.getState()
})
store.dispatch({type:'INITIALIZE'})