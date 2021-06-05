'use strict';

const Hapi = require('@hapi/hapi');
const Joi = require('@hapi/joi');
const queries = require('./queries');

const init = async () => {
	const server = Hapi.server({
		port: 3000,
		host: 'localhost',
	});

	server.route({
		method: 'GET',
		path: '/',
		handler: (req, res) => {
			return queries.getAll();
		},
	});

	server.route({
		method: 'GET',
		path: '/',
		handler: (req, res) => {
			const filter = req.query.filter;

			return queries.getFilter(filter);
		},
	});

	server.route({
		method: 'POST',
		path: '/tasks',
		handler: (req, h) => {
			const payload = req.payload;
			const query = queries.insertUser(payload);

			return query;
		},
	});

	server.route({
		method: 'PATCH',
		path: '/tasks/{id}',
		handler: (req, h) => {
			const id = req.params.id;
			const payload = req.payload;
			const query = queries.updateTask(id, payload);

			return query;
		},
	});

	server.route({
		method: 'DELETE',
		path: '/tasks/{id}',
		handler: (req, h) => {
			const id = req.params.id;
			const query = queries.deleteTask(id);

			return query;
		},
	});

	await server.start();
	console.log(`Server running on: ${server.info.uri} `);
};

process.on('unhandledRejection', err => {
	console.log(err);
	process.exit(1);
});

init();
