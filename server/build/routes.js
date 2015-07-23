/// <reference path="../typings/hapi/hapi.d.ts"/>
var routes = new Array();
// main application routes for our server
routes.push({
    method: 'GET',
    path: '/hello',
    handler: function (request, reply) {
        reply('hello world');
    }
});
module.exports = routes;
