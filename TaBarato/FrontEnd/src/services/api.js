import axios from 'axios';

const api = axios.create({
 baseURL: 'http://192.168.1.8:3000/api'
 // baseURL: 'http://tabaratoserver.herokuapp.com/api'//ja ta on no heroku
});

export default api;

