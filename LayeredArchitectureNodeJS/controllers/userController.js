const userService = require('../services/userService');

exports.addUser = (req, res) => {
    const { name, contact } = req.body;

    userService.addUser(name, contact, (err, result) => {
        if (err) return res.status(500).json(err);

        res.json({
            message: "User added successfully",
            id: result.insertId
        });
        console.log("Data Inserted...");
    });
};

exports.deleteUser = (req, res) => {
    const id = req.params.id;

    userService.removeUser(id, (err, result) => {
        if (err) return res.status(500).json(err);

        res.json({ message: "Record Deleted successfully...!" });
        console.log("Data deleted...");
    });
};

exports.getUsers = (req, res) => {
    userService.getAllUsers((err, result) => {
        if (err) return res.status(500).json(err);

        res.json(result);
        console.log("Records fetched...");
    });
};

exports.updateUser = (req, res) => {
    const { name, contact } = req.body;
    const id = req.params.id;

    userService.editUser(id, name, contact, (err, result) => {
        if (err) return res.status(500).json(err);

        res.json({ message: "Record Updated Successfully...!" });
        console.log("Record updated...");
    });
};