var mockWorkspace = {
  views: ['TR', 'RFR', 'Beta', 'Alpha']
};

var WorkspaceFetcher = {
  fetch: function () {
    // returning a Promise because that is what fetch does. function (resolve, reject)
    return new Promise(function (resolve) {
      // simulate an asynchronous action where data is fetched on
      // a remote server somewhere.
      setTimeout(function () {
        // resolve with some mock data
        resolve(mockWorkspace);
      }, 250);
    });
  }
};

export default WorkspaceFetcher;
