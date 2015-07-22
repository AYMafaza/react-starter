/// <reference path="../typings/hapi/hapi.d.ts"/>
var Hapi = require('hapi');
// Create a server with a host and port
var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 3000
});
server.route({
    method: 'GET',
    path: '/hello',
    handler: function (request, reply) {
        reply('hello world');
    }
});
server.start();
