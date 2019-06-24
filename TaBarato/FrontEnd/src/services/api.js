import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tabaratoserver.herokuapp.com/api'//ja ta on no heroku
});

export default api;

