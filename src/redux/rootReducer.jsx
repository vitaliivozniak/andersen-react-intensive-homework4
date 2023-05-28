import { combineReducers } from "redux";
import { loginReducer } from './loginReducer';
import { todoReducer } from './todoReducer';
import { createStore } from "redux";



export const rootReducer = combineReducers({
	login: loginReducer,
	todo: todoReducer
})


let store = createStore(rootReducer);
export default store