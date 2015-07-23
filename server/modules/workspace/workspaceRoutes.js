/// <reference path="../../../typings/hapi/hapi.d.ts"/>
var WorkspaceController = require('./controllers/workspaceController');
var routes = new Array();
routes.push({
    method: 'GET',
    path: '/workspace/default',
    handler: WorkspaceController.retrieveDefaultWorkspace
});
module.exports = routes;
