import { HOME_LIST } from '../constants';

const defaultState = {
	name: 'home',
	homeList: [],
};
/**
 *
 * @param {typeof defaultState} state
 * @param {{type:string,payload:string[]}} action
 * @returns
 */
export default function (state = defaultState, action) {
	switch (action.type) {
		case HOME_LIST:
			return {
				...state,
				homeList: action.payload,
			};
		default:
			return state;
	}
}
