const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');
const UserController = require('./controllers/UserController');//novo

const UserController = require('./controllers/UserController');


routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);


<<<<<<< HEAD
routes.post('/users', UserController.store)

=======
routes.get('/users/:id', UserController.show);//novo
routes.post('/users', UserController.store);//novo
>>>>>>> c8b16feb3fb4bb920baf6f5eaa7b5b8612ea798f
module.exports = routes;