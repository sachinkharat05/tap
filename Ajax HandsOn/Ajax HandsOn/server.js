var express=require('express');
var cors=require('cors');
const bodyParser = require('body-parser');
var path=require('path');
var mysql=require('mysql2');


app=express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.listen(7777,()=>{
    console.log("Server Listening on port no. 7777")
});


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


app.get((req,res)=>{
    res.sendFile("index.html");
});

// CREATE 
app.post('/users', (req, res) => {
    const { name, contact } = req.body;
    const sql = "INSERT INTO users (name, contact) VALUES (?, ?)";
    connection.query(sql, [name, contact], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: "User added successfully", id: result.insertId });
        console.log("Data inserted in DB..");
    });
});

//DELETE
app.delete('/delete/:id',(req,res)=>{
    const id=req.params.id;
    const sql = "DELETE FROM users WHERE id = ?";
    connection.query(sql,[id],(err,result)=>{
        if(err) return res.status(500).json({error: err});
        res.json({ message: "Record deleted Successfully"});
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "No record found" });
        };
        console.log("Data deleted sucessfully..");
    });
});

//READ
app.get('/getAllUsers',(req,res)=>{
    const sql= "SELECT * FROM users";
    connection.query(sql,(err,result)=>{
        if(err) return res.status(500).json({error:err});
        res.json(result);
        console.log("Record Displayed...");
    });
});


//UPDATE
app.put('/updateRecord/:id',(req,res)=>{
    const id=req.params.id;
    const {name,contact}=req.body;
    const sql="UPDATE users SET name=?, contact=? WHERE id=?";

    connection.query(sql,[name,contact,id],(err,result)=>{
        if(err) return res.status(500).json({error: err});
        if (result.affectedRows === 0) {
        return res.status(404).json({ message: "User not found" });
        };
        res.json({message:"Record updated sucessfully.."});
        console.log("Record updated..")
    });
});