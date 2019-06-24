import axios from 'axios';

const api = axios.create({
  baseURL: 'http://servertabarato.herokuapp.com/api'//ja ta on no heroku
});

export default api;

