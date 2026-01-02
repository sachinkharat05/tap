
var mysql=require('mysql2');

var dbserver={
    host: "localhost",
    user: "root",
    password: "password",
    database: 'customers'
}

var connection=mysql.createConnection(dbserver);
connection.connect(function(err){
    if(err){
        console.log("Connection Unsucessful.."+err)
    }
    else{
        console.log("Connection Sucessful.." )
    }
});


 
app.post('/users', (req, res) => {
    const { name, contact } = req.body;
    const sql = "INSERT INTO users (name, contact) VALUES (?, ?)";
    db.query(sql, [name, contact], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: "User added successfully", id: result.insertId });
    });
});

// var insert= "INSERT INTO users(name, contact) VALUES('Sahil','1234567890')";
// var deletee= "DELETE FROM users WHERE id=1";
// var update= "UPDATE users SET name='Nirjala' WHERE id=1";
// var read= "SELECT * FROM users";

// connection.query(read,(err, data)=>{
//     if(err){
//         console.log("Unable to Fetch from DB...");
//     }
//     else{
//         console.log(data);
//     }
// });

// connection.query(insert,(err,data)=>{
//     if(err){
//         console.log("Unable to Insert Data in DB...");
//     }
//     else{
//         console.log("Sucessfully inserted data");
//     }
// });

