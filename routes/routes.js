const express = require('express');
const controller = require('../controllers/controllers.js');
const router = express.Router();

router.post('/createUser', controller.createUser);
router.get('/getUsers', controller.getAllUsers);
router.get('/getUser/:id', controller.getUser);
router.patch('/updateUser/:id', controller.updateUser);
router.delete('/deleteUser/:id', controller.deleteUser);

module.exports = router;