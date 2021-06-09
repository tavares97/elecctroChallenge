import React, { useContext } from 'react';
import { GoogleLogin } from 'react-google-login';

import AuthContext from '../../context/authContext/authContext';

const Login = () => {
	const authContext = useContext(AuthContext);

	const { logIn } = authContext;

	const onSuccess = res => {
		console.log(`[Login Success] currentUser: ${res.profileObj.name}`);
		logIn(res.profileObj.name, res.accessToken);
	};

	const onFailure = res => {
		console.log(`[Login Failed] res ${res}`);
	};
	return (
		<>
			<GoogleLogin
				clientId={clientId}
				buttonText='Login'
				onSuccess={onSuccess}
				onFailure={onFailure}
				cookiePolicy={'single_host_origin'}
				isSignedIn={true}
			/>
		</>
	);
};

export default Login;
