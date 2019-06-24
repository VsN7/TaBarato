import axios from 'axios';

const api = axios.create({
  baseURL: 'http://tabaratoserver.herokuapp.com/api'//ja ta on no heroku
});

export default api;

