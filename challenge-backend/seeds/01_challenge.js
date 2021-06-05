exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('tasks')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('tasks').insert([
				{ id: 1, description: 'teste1', state: 'INCOMPLETE' },
				{ id: 2, description: 'teste2', state: 'COMPLETED' },
				{ id: 3, description: 'teste3', state: 'INCOMPLETE' },
			]);
		});
};
