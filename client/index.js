import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import { Provider } from 'react-redux';
import { getClientStore } from '../store';

const App = () => {
	return (
		<Provider store={getClientStore()}>
			<BrowserRouter>
				<Router></Router>
			</BrowserRouter>
		</Provider>
	);
};
// 注水将事件绑定，并将初始数据注入
ReactDOM.hydrate(<App></App>, document.getElementById('root'));
