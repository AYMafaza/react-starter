/// <reference path="../../../typings/hapi/hapi.d.ts"/>

import Hapi = require('hapi');
import WorkspaceController = require('./controllers/workspaceController');

var routes: Array<Hapi.IRouteConfiguration> = new Array<Hapi.IRouteConfiguration>();

// workspace module routes

routes.push({
  method: 'GET',
  path: '/workspace/default',
  handler: WorkspaceController.retrieveDefaultWorkspace
});

export = routes;
