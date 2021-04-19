import { createStore,applyMiddleware } from 'redux'
// import { countReducer } from './../reducers/userReducer'
// import { apiReducer } from './../reducers/apiReducer'
import {rootReducer} from './RootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const store = createStore( rootReducer ,composeWithDevTools(applyMiddleware(thunk)) ) 


export default store