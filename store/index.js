import { applyMiddleware, combineReducers, createStore } from 'redux';
import homeReducer from './reducers/home';
import thunk from 'redux-thunk';
const reducer = combineReducers({
	home: homeReducer,
});

const getStore = () => {
	return createStore(reducer, applyMiddleware(thunk));
};

export const getClientStore = () => {
	const initState = window.$initState || {};
	return createStore(reducer, initState, applyMiddleware(thunk));
};

export default getStore;
