const connection = require('./knexfile')[process.env.NODE_ENV || 'development'];
const database = require('knex')(connection);

module.exports = {
	getAll() {
		return database('tasks');
	},

	getFilter(filter) {
		return database('tasks').where('state', filter);
	},

	insertUser(newTask) {
		return database('tasks').insert(newTask);
	},

	updateTask(id, newTask) {
		return database('tasks').where({ id: id }).update(newTask);
	},

	deleteTask(id) {
		return database('tasks').where({ id: id }).del();
	},
};
