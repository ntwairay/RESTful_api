
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
 * /users/list:
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
 * /users/{id}/search:
 *   get:
 *     tags:
 *       - users
 *     description: Returns a match user by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: user's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: a user
 *         schema:
 *           $ref: '#/definitions/users'
  */
router.get('/:id/search', user_controller.user_find);

/**
 * @swagger
 * /users/create:
 *   post:
 *     tags: users
 *     description: Adds a single user
 *     produces: application/json
 *     parameters:
 *       - name: name
 *         description: user's name
 *         in: path
 *         required: true
 *         type: string
 *       - name: password
 *         description: user's password
 *         in: path
 *         required: true
 *         type: integer
 *       - name: prfession
 *         description: user's profession
 *         in: path
 *         required: true
 *         type: string
 *       - name: id
 *         description: user's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully added
 */
router.post('/create', user_controller.user_create);

/**
 * @swagger
 * /users/{id}/delete:
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
