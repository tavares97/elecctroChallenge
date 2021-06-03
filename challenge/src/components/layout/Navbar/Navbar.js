import React, { useContext } from 'react';
import Login from '../../home/Login';
import Logout from '../../home/Logout';

import AuthContext from '../../../context/authContext/authContext';

function Navbar() {
	const authContext = useContext(AuthContext);

	const { loggedIn, name } = authContext;

	return (
		<nav className='bg-indigo-600 h-16 flex items-center justify-between p-3 text-white'>
			{loggedIn && name ? <h2>Welcome {name} </h2> : <h2>Welcome</h2>}
			<div>
				{loggedIn ? (
					<Logout />
				) : (
					<>
						<Login /> <Logout />{' '}
					</>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
