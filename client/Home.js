const React = require('react');

const Home = () => {
	return (
		<div>
			<div
				onClick={() => {
					alert('1111');
				}}
			>
				Home
			</div>
		</div>
	);
};

module.exports = Home;
