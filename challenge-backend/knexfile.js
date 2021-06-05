// Update with your config settings.

module.exports = {
	development: {
		client: 'pg',
		connection: 'postgress://vacie:challenge@localhost/teste',
	},

	staging: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user: 'username',
			password: 'password',
		},
	},

	production: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user: 'username',
			password: 'password',
		},
	},
};
