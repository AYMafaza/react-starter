/// <reference path="../../../../typings/hapi/hapi.d.ts"/>
var WorkspaceModel = require('../models/workspaceModel');
function retrieveDefaultWorkspace(request, reply) {
    var repo = new WorkspaceModel.WorkspaceRepository();
    reply(repo.getDefault());
}
exports.retrieveDefaultWorkspace = retrieveDefaultWorkspace;
