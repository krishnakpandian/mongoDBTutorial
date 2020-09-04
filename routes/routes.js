const express = require('express');
const controller = require('../controllers/controllers.js');

const router = express.Router();

router.post('/createUser', controller.createUser);
router.get('/getUser', controller.getUser);
router.get('/getUser/:id', controller.getAllUsers);
router.patch('/updateUser/:id', controller.updateUser);
router.delete('/deleteUser/:id', controller.deleteUser);

module.exports = router;