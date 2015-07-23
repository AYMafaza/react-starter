import fetch from 'isomorphic-fetch';

var WorkspaceFetcher = {
  fetch: function () {
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
