const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.post('/users', controller.addUser);
router.delete('/delete/:id', controller.deleteUser);
router.get('/getAllUsers', controller.getUsers);
router.put('/updateRecord/:id', controller.updateUser);

module.exports = router;