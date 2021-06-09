import React, { useContext } from 'react';
import { GoogleLogout } from 'react-google-login';

import AuthContext from '../../context/authContext/authContext';

const Logout = () => {
	const authContext = useContext(AuthContext);

	const { logOut } = authContext;

	const onSuccess = () => {
		alert('Logout successful');
		logOut();
	};
	return (
		<>
			<GoogleLogout
				clientId={clientId}
				buttonText='Logout'
				onLogoutSuccess={onSuccess}
			/>
		</>
	);
};

export default Logout;
