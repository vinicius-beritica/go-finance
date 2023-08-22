import axios from 'axios';
export const apiRaroLabs = axios.create({
  baseURL: 'http://academy-react.rarolabs.com.br',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});
