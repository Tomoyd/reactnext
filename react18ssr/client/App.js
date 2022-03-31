import React, { Suspense } from 'react';
import Sidebar from './Sidebar.js';
const Comment = React.lazy(() =>
	import('./comment.js' /* webpackPrefetch: true */),
);

const App = () => {
	return (
		<div>
			<div>9999999</div>
			<Suspense fallback='111111'>
				<Sidebar></Sidebar>
			</Suspense>
			<Suspense fallback={<div>loading</div>}>
				<Comment></Comment>
			</Suspense>
		</div>
	);
};

export default App;
