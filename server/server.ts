/// <reference path="../typings/hapi/hapi.d.ts"/>

import Hapi = require('hapi');
import routes = require('./routes');
import workspace = require('./modules/workspace/module');

// create server with host and port
var server = new Hapi.Server();

server.connection(<Hapi.IServerConnectionOptions>{
	host: 'localhost',
	port: 3000
});

// import routes
server.route(routes);
server.route(workspace.routes);

// run server
server.start();
