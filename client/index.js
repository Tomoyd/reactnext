import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

const App = () => (
	<BrowserRouter>
		<Router></Router>
	</BrowserRouter>
);

ReactDOM.hydrate(<App></App>, document.getElementById('root'));
