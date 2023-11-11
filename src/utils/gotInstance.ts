import got from 'got';

const instance = got.extend({
  headers: {
    "content-type": "application/x-www-form-urlencoded",
  },
  retry: {
    limit: 3
  }
});

export default instance;