/// <reference path="../../../../typings/hapi/hapi.d.ts"/>

import Hapi = require('hapi');
import WorkspaceModel = require('../models/workspaceModel');

export function retrieveDefaultWorkspace(request: Hapi.Request, reply: Function) {
    var repo = new WorkspaceModel.WorkspaceRepository();

    reply(repo.getDefault());
}
