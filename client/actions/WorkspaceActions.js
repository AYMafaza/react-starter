import alt from '../../shared/alt';
import WorkspaceFetcher from '../data/WorkspaceFetcher';

class WorkspaceActions {
  loadWorkspace(workspace) {
    this.dispatch(workspace);
  }

  fetchWorkspace() {
    var _this = this;
    // we dispatch an event here so we can have "loading" state.
    _this.dispatch();

    WorkspaceFetcher.fetch()
      .then(function(json) {
        _this.actions.loadWorkspace(json);
      }).catch(function(err) {
        _this.actions.workspaceError(err.message);
      });
  }

  workspaceError(errorMessage) {
    this.dispatch(errorMessage);
  }
}

export default alt.createActions(WorkspaceActions);
