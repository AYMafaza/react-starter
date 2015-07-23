/// <reference path="../typings/hapi/hapi.d.ts"/>
var routes = new Array();
routes.push({
    method: 'GET',
    path: '/hello',
    handler: function (request, reply) {
        reply('hello world');
    }
});
module.exports = routes;
