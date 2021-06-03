import React, { useReducer } from 'react';

//CONTEXT
import AuthContext from './authContext';
import authReducer from './authReducer';

//IMPORT TYPES
import { LOGIN, LOGOUT } from '../types';

const AuthState = props => {
	//SETS INITIAL STATE FOR THE APP
	const initialState = {
		loggedIn: false,
		token: null,
		name: null,
	};

	const [state, dispatch] = useReducer(authReducer, initialState);

	const logIn = (name, token) => {
		dispatch({ type: LOGIN, payload: { name, token } });
	};

	const logOut = () => {
		dispatch({ type: LOGOUT });
	};

	return (
		<AuthContext.Provider
			value={{
				loggedIn: state.loggedIn,
				token: state.token,
				name: state.name,
				logIn,
				logOut,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
