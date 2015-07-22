/// <reference path="../typings/hapi/hapi.d.ts"/>

import Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection(<Hapi.IServerConnectionOptions>{
	host: 'localhost',
	port: 3000
});

server.route({
	method: 'GET',
	path: '/hello',
	handler: function (request: Hapi.Request, reply: Function) {
		reply('hello world');
	}
});

server.start();
