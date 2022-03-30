const express = require('express');

const path = require('path');

import { render } from './utils';

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.use('*', (req, res) => {
	res.send(render(req));
});

app.listen(3000, () => {
	console.log('3000', 'http://localhost:3000');
});
