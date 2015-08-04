/// <reference path="../typings/hapi/hapi.d.ts"/>

import Hapi = require('hapi');
import routes = require('./routes');
import workspace = require('./modules/workspace/module');

var application = function (options: Hapi.IServerConnectionOptions) {
	var server = new Hapi.Server();

	// create server with host and port
	server.connection(options);

	// import routes
	server.route(routes);
	server.route(workspace.routes);

	return server;
};

export = application;
