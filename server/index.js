const express = require('express');

const path = require('path');

import { homeListAction } from '../store/actions/home';
import { render } from './utils';

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/getHomeList', (req, res) => {
	res.json({
		data: [1, 2, 3],
	});
});
app.use('*', async (req, res) => {
	res.send(render(req, homeListAction([1, 2, 3])));
});

app.listen(3000, () => {
	console.log('3000', 'http://localhost:3000');
});
