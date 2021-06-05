import React, { useContext } from 'react';
import { GoogleLogout } from 'react-google-login';

import AuthContext from '../../context/authContext/authContext';

const clientId =
	'187575505098-d42stbvhplacntum0ttfgqtpemb4e7pa.apps.googleusercontent.com';

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
