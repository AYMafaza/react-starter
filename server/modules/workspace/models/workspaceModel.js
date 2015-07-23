var Workspace = (function () {
    function Workspace(model) {
        this.Id = model.Id;
        this.Name = model.Name;
        this.Views = model.Views;
    }
    Workspace.prototype.AddView = function (name) {
        this.Views.push(name);
    };
    return Workspace;
})();
exports.Workspace = Workspace;
var WorkspaceRepository = (function () {
    function WorkspaceRepository() {
        this.MockWorkspace = new Workspace({ Id: 100, Name: 'Default Workspace', Views: [] });
        this.MockWorkspace.AddView('TR');
        this.MockWorkspace.AddView('TR');
        this.MockWorkspace.AddView('TR');
        this.MockWorkspace.AddView('TR');
    }
    WorkspaceRepository.prototype.getDefault = function () {
        return this.MockWorkspace;
    };
    return WorkspaceRepository;
})();
exports.WorkspaceRepository = WorkspaceRepository;
