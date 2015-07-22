import alt from '../../shared/alt';
import WorkspaceFetcher from '../data/WorkspaceFetcher';

class WorkspaceActions {
  loadWorkspace(workspace) {
    this.dispatch(workspace);
  }

  fetchWorkspace() {
    // we dispatch an event here so we can have "loading" state.
    this.dispatch();

    WorkspaceFetcher.fetch()
      .then((workspace) => {
        // we can access other actions within our action through `this.actions`
        this.actions.loadWorkspace(workspace);
      })
      .catch((errorMessage) => {
        this.actions.workspaceError(errorMessage);
      });
  }

  workspaceError(errorMessage) {
    this.dispatch(errorMessage);
  }
}

export default alt.createActions(WorkspaceActions);
