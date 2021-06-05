exports.up = function (knex) {
	return knex.schema.createTable('tasks', table => {
		table.increments(); // this represents the primary key.
		table.string('description'); // this is a column.
		table.enu('state', ['COMPLETED', 'INCOMPLETE']);
		table.timestamp('createdAt').defaultTo(knex.fn.now());
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('tasks');
};
