import { renderToPipeableStream } from 'react-dom/server';
import App from '../client/App';
import React from 'react';

const Html = ({ children }) => {
	return (
		<html>
			<body>
				<div id='root'>{children}</div>

				<script src='/main.js'></script>
			</body>
		</html>
	);
};

export const render = (res) => {
	const { pipe, abort } = renderToPipeableStream(
		<Html>
			<App></App>
		</Html>,
		{
			onShellReady() {
				console.log('12344', 12344);
				res.statusCode = 200;
				res.setHeader('Content-type', 'text/html');
				pipe(res);
			},
			onError(x) {
				console.error(x);
			},
		},
	);
	setTimeout(abort, 10000);
};
