var express = require('express');
var router = express.Router();
const controller = require('../controllers/posts');
// GET /posts/users/:id
router.get('/', controller.all)
      .get('/users/:id', controller.getByUser)
      .post('/', controller.create)
      .delete('/users/delete/:id', controller.delete);

module.exports = router;