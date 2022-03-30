import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import Router from '../client/Router';

export const render = (req) => {
	console.log('req', req.baseUrl);
	const content = renderToString(
		<StaticRouter location={req.baseUrl}>
			<Router></Router>
		</StaticRouter>,
	);

	return `
        <html>
        <body>
            <div id="root"> 
                ${content}
                <script src="/main.js"></script>
            </div>
        </body>
        </html>
        `;
};
