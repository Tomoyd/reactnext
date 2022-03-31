const express = require('express');

const path = require('path');
const { render } = require('./render');
const app = express();
console.log('__dirname', path.join(__dirname, '../ssr-dist'));

app.use(express.static(path.join(__dirname, '../ssr-dist')));

app.use('*', async (req, res) => {
	render(res);
});

app.listen(3000, () => {
	console.log('3000', 'http://localhost:3000');
});
