/// <reference path="../typings/hapi/hapi.d.ts"/>

import Hapi = require('hapi');

var routes: Array<Hapi.IRouteConfiguration> = new Array<Hapi.IRouteConfiguration>();

// main application routes for our server
routes.push({
    method: 'GET',
    path: '/{path*}',
    handler: {
 		directory: {
            path: './client',
            listing: true,
            index: true
        }
    }
});

routes.push({
  method: 'GET',
  path: '/hello',
  handler: function (request: Hapi.Request, reply: Function) {
    reply('hello world');
  }
});

export = routes;
