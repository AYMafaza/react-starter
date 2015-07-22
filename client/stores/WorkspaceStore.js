import alt from '../../shared/alt';
import WorkspaceActions from '../actions/WorkspaceActions';

class WorkspaceStore {
  constructor() {
    this.bindActions(WorkspaceActions);
    this.state = { workspace: {}, errorMessage: null };
  }

  onLoadWorkspace(workspace) {
    this.setState({ workspace: workspace, errorMessage: null });
  }

  onFetchWorkspace() {
    this.setState({ workspace: {}, errorMessage: null });
  }

  onWorkspaceError(errorMessage) {
    this.setState({ workspace: {}, errorMessage: errorMessage });
  }
}

export default alt.createStore(WorkspaceStore, 'WorkspaceStore');
