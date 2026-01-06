const connection = require('../config/db');

exports.insertUser = (name, contact, result) => {
    const sql = "INSERT INTO users(name,contact) VALUES(?,?)";
    connection.query(sql, [name, contact], result);
};

exports.deleteUser = (id, result) => {
    const sql = "DELETE FROM users WHERE id=?";
    connection.query(sql, [id], result);
};

exports.getUsers = (result) => {
    const sql = "SELECT * FROM users";
    connection.query(sql, result);
};

exports.updateUser = (id, name, contact, result) => {
    const sql = "UPDATE users SET name=?, contact=? WHERE id=?";
    connection.query(sql, [name, contact, id], result);
};