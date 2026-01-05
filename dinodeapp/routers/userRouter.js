const express = require('express');
const router = express.Router();

// infrastructure
const db = require('../db/connection');

// repository
const userRepository = require('../repositories/userRepository')(db);

// service
const userService = require('../services/userService')(userRepository);

// controller
const userController = require('../controllers/userController')(userService);

// routes
router.post('/users', userController.addUser);
router.delete('/delete/:id', userController.deleteUser);
router.get('/getAllUsers', userController.getUsers);
router.put('/updateRecord/:id', userController.updateUser);

module.exports = router;
