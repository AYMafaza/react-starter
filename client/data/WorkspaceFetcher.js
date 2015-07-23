var WorkspaceFetcher = {
  fetch: function () {
    return fetch('/workspace/default', { method: 'get' });
  }
};

export default WorkspaceFetcher;
