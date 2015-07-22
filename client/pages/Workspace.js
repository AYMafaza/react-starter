import React from 'react';
import AltContainer from 'alt/AltContainer';
import WorkspaceStore from '../stores/WorkspaceStore';
import WorkspaceActions from '../actions/WorkspaceActions';
import WorkspaceView from '../components/WorkspaceView';

let Workspace = React.createClass({
  componentDidMount() {
    WorkspaceActions.fetchWorkspace();
  },
  render() {
    return (
      <div>Welcome to your workspace
        <h3>Views</h3>
        <AltContainer store={WorkspaceStore}>
          <WorkspaceView />
        </AltContainer>
      </div>
    );
  }
});

export default Workspace;
