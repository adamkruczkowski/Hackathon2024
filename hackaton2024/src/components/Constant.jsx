export let [SERVER_URL, setSERVER_URL] = 'http://localhost:5174';

export const setServerUrl = (newUrl) => {
  SERVER_URL = newUrl;
};