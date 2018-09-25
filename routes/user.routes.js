
const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const user_controller = require('../controllers/user.controller');

/**
 * @swagger
 * definition:
 *   users:
 *     properties:
 *       name:
 *         type: string
 *       password:
 *         type: string
 *       profession:
 *         type: string
 *       id:
 *         type: integer
 */

/**
 * @swagger
 * /api/users/list:
 *   get:
 *     tags:
 *       - users
 *     description: Returns all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of users
 *         schema:
 *           $ref: '#/definitions/users'
 */
router.get('/list', user_controller.user_getAll);

/**
 * @swagger
 * /api/users/{id}/search:
 *   get:
 *     tags:
 *       - users
 *     description: Returns a match user by id
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: a user
 *         schema:
 *           $ref: '#/definitions/users'
  */
router.get('/:id/search', user_controller.user_find);

/**
 * @swagger
 * /api/users/create:
 *   post:
 *     tags: users
 *     description: Adds a single user
 *     produces: application/json
 *     parameters:
 *       name: tarun
 *       in: body
 *       description: Fields for the user resource
 *       schema:
 *         type: array
 *         $ref: '#/definitions/user'
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.post('/create', user_controller.user_create);

/**
 * @swagger
 * /api/users/{id}/delete:
 *   delete:
 *     tags:
 *       - users
 *     description: Deletes a single user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: user's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/:id/delete', user_controller.user_delete);
//router.put('/:id/update', product_controller.product_update);

module.exports = router;
