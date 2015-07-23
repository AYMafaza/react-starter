/// <reference path="../typings/hapi/hapi.d.ts"/>
var Hapi = require('hapi');
var routes = require('./routes');
var workspace = require('./modules/workspace/module');
// create server with host and port
var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 3000
});
// import routes
server.route(routes);
server.route(workspace.routes);
// run server
server.start();
