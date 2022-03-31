import axios from 'axios';
import { HOME_LIST } from '../constants';

export const homeListAction = (data = []) => {
	return {
		type: HOME_LIST,
		payload: data,
	};
};

export const getHomeList = () => {
	return async (dispatch) => {
		dispatch(homeListAction([1, 2, 3, 4, 5.6]));
	};
};
