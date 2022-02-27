import axios from 'axios';

export function exec(callback) {
  const res = callback('123');
  
  if (res === 'abc') {
    callback('456');
  }
}

export function getUsers() {
  return axios.get('/api/users');
}

export function delay(callback, ms) {
  setTimeout(() => {
    callback(ms);
  }, ms);
}
