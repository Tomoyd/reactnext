import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import Router from '../client/Router';
import getStore from '../store';

// 脱水, 只有干的html 没有事件无法交互
export const render = (req, actionData) => {
	const store = getStore();
	store.dispatch(actionData);

	const content = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.baseUrl}>
				<Router></Router>
			</StaticRouter>
		</Provider>,
	);

	return `
        <html>
        <body>
            <div id="root"> 
                ${content}
                <script>
                window.$initState = ${JSON.stringify(store.getState())}; 
                </script>
                <script src="/main.js"></script>
            </div>
        </body>
        </html>
        `;
};
