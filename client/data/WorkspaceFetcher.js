import fetch from 'isomorphic-fetch';
import es6Promise from 'es6-promise';

var Promise = es6Promise.Promise;

var WorkspaceFetcher = {
  fetch: function () {
    debugger;
    return new Promise(function (resolve, reject) {
      fetch('/workspace/default', { method: 'get' })
        .then(function(response) {
            if (response.status !== 200) {
                reject('Bad response from server');
            }
            else {
                resolve(response.json());
            }
        }).catch(function (err) { reject(err); });
    });
  }
};

export default WorkspaceFetcher;
