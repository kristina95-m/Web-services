var express = require('express');
var router = express.Router();
const controller = require('../controllers/posts');
const jwt = require('express-jwt');

require('dotenv').config();

/**
 * Prvite 2 ruti treba da bidat dozvoleni za site korisnici
 * Tretata ruta treba da bide dozvolena samo za najaveni korisnici
 * 
 * Zabranuvanje na neavtenticiran pristap so koristenje na express-jwt
 * Na prvite 2 ruti ne pravime avtentikacija
 */

// router.use(jwt({ secret: 'shhhhhhared-secret', algorithms: ['HS256']}).unless({path: ['/token']}));
router.get('/', controller.all)
      .get('/users/:id', controller.getByUser)
      .get('/:id',jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }),controller.getByPost)
      .post('/', jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }), controller.create);

module.exports = router;