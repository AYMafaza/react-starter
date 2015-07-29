jest.dontMock('../components/WorkspaceView.js');
jest.dontMock('../components/WorkspaceViewItem.js');

import React from 'react/addons';
const WorkspaceView = require('../components/WorkspaceView');
const WorkspaceViewItem = require('../components/WorkspaceViewItem');
var TestUtils = React.addons.TestUtils;

describe('WorkspaceView', () => {
  it('displays an error message', function() {
    // render component
    var WorkspaceViewComponent = TestUtils.renderIntoDocument(
      <WorkspaceView errorMessage="Bad" />
    );

    // find div containing error message
    var message = TestUtils.findRenderedDOMComponentWithTag(WorkspaceViewComponent, 'div');

    // verify error message
    expect(message.getDOMNode().textContent).toEqual('Bad');
  });
  it('displays a loading gif when waiting for data', function() {
    // render component with no data
    var WorkspaceViewComponent = TestUtils.renderIntoDocument(
      <WorkspaceView />
    );

    // find div and image elem
    var div = TestUtils.findRenderedDOMComponentWithTag(WorkspaceViewComponent, 'div');
    var img = TestUtils.findRenderedDOMComponentWithTag(div, 'img');

    // verify image src is loading gif
    expect(img.getDOMNode().getAttribute('src')).toContain('ajax-loader.gif');
  });
  it('displays the correct number of views', function() {
    // create mock data
    var mockWorkspace = {"Id":100,"Name":"Default Workspace","Views":["A1","A2","A3","A4"]};

    // render component
    var WorkspaceViewComponent = TestUtils.renderIntoDocument(
      <WorkspaceView />
    );

    // set mock workspace
    WorkspaceViewComponent.setProps({ workspace: mockWorkspace });

    // find workspace views
    var views = TestUtils.scryRenderedComponentsWithType(WorkspaceViewComponent, WorkspaceViewItem);

    // verify correct number of views loaded
    expect(views.length).toBe(4);

    // ensure first view matches mock data
    expect(views[0].getDOMNode().textContent).toEqual('A1');
  });
});
