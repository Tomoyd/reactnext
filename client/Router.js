import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

const Router = () => {
	return (
		<div>
			<div>
				<Link to='/'>home</Link>
			</div>
			<div>
				<Link to='/login'>login</Link>
			</div>
			<Routes>
				<Route path='/' exact element={<div>1114141414</div>}></Route>
				<Route path='/login' exact element={<Login></Login>}></Route>
			</Routes>
		</div>
	);
};

export default Router;
