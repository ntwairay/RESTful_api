const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const user_controller = require('../controllers/user.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/list', user_controller.user_getAll);

router.get('/:id/search', user_controller.user_find);

router.post('/create', user_controller.user_create);

router.delete('/:id/delete', user_controller.user_delete);
//router.put('/:id/update', product_controller.product_update);

module.exports = router;
