jest.dontMock('../data/WorkspaceFetcher.js');

require('es6-promise').polyfill();

var fetch = require('isomorphic-fetch');
import nock from 'nock';

const WorkspaceFetcher = require('../data/WorkspaceFetcher');
const mockData = {'Id':100,'Name':'Default Workspace','Views':['A1','A2','A3','A4']};
const badData = 'pqr:{"abc":"abc",}';

describe('WorkspaceFetcher', () => {
  var fetchDone, payload;

  function runFetch() {
    WorkspaceFetcher.fetch()
      .then(function(json) {
        payload = json;
        fetchDone = true;
      })
      .catch(function(err) {
        payload = err.message;
        fetchDone = true;
      });
  }

  it('calls the correct endpoint to fetch data', () => {
    fetchDone = false;
    payload = null;

    nock('http://localhost:3000/')
      .get('/workspace/default')
      .reply(200, mockData);

    runs(runFetch);

    waitsFor(function () {
      return fetchDone;
    }, 'The request timed out.', 1000);

    runs(function () {
      expect(payload.Id).toEqual(100);
      expect(fetchDone).not.toEqual(false);
    });
  });

  it('indicates if the server failed to return successfully', () => {
    fetchDone = false;
    payload = null;

    nock('http://localhost:3000/')
      .get('/workspace/default')
      .reply(500, null);

    runs(runFetch);

    waitsFor(function () {
      return fetchDone;
    }, 'The request timed out.', 1000);

    runs(function () {
      expect(payload).toEqual('Bad response from server');
      expect(fetchDone).not.toEqual(false);
    });
  });

  it('can handle the server returning poorly formatted data', () => {
    fetchDone = false;
    payload = null;

    nock('http://localhost:3000/')
      .get('/workspace/default')
      .reply(200, badData);

    runs(runFetch);

    waitsFor(function () {
      return fetchDone;
    }, 'The request timed out.', 1000);

    runs(function () {
      expect(payload).toMatch('Unexpected');
      expect(fetchDone).not.toEqual(false);
    });
  });

  it('can handle not being able to reach the server', () => {
    fetchDone = false;
    payload = null;

    runs(runFetch);

    waitsFor(function () {
      return fetchDone;
    }, 'The request timed out.', 1000);

    runs(function () {
      expect(payload).toMatch('failed');
      expect(fetchDone).not.toEqual(false);
    });
  });
});
