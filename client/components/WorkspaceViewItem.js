import React from 'react';

let WorkspaceViewItem = React.createClass({
  render() {
    return (
      <li>{this.props.data}</li>
    );
  }
});

export default WorkspaceViewItem;
