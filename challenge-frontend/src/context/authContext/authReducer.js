import { LOGIN, LOGOUT } from '../types';

const authReducer = (state, action) => {
	switch (action.type) {
		case LOGIN:
			console.log(action.payload);
			return {
				...state,
				loggedIn: true,
				token: action.payload.token,
				name: action.payload.name,
			};

		case LOGOUT:
			return {
				...state,
				loggedIn: false,
				token: null,
				name: null,
			};

		default:
			return state;
	}
};

export default authReducer;
