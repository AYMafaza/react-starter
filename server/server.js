/// <reference path="../typings/hapi/hapi.d.ts"/>
var Hapi = require('hapi');
var routes = require('./routes');
var workspace = require('./modules/workspace');
var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 3000
});
server.route(routes);
server.route(workspace.WorkspaceRoutes);
server.start();
