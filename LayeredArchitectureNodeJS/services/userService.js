const userRepo = require('../repositories/userRepository');

exports.addUser = (name, contact, result) => {
    userRepo.insertUser(name, contact, result);
};

exports.removeUser = (id, result) => {
    userRepo.deleteUser(id, result);
};

exports.getAllUsers = (result) => {
    userRepo.getUsers(result);
};

exports.editUser = (id, name, contact, result) => {
    userRepo.updateUser(id, name, contact, result);
};