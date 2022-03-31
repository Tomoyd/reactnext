import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getHomeList } from '../store/actions/home';

class Home extends React.Component {
	// useEffect(() => {
	// 	console.log('home', home);
	// 	getHomeList();
	// }, []);

	componentDidMount() {
		console.log('first', this.props.home);
		console.log('first', getHomeList);
		// this.props.getHomeList();
	}

	render() {
		return (
			<div>
				<div
					onClick={() => {
						this.props.getHomeList();
					}}
				>
					<div>
						{this.props.home.homeList.map((item) => {
							return <div key={item}>{item}</div>;
						})}
					</div>
					Home
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	home: state.home,
});

export default connect(mapStateToProps, {
	getHomeList: getHomeList,
})(Home);
