//instantiation
//import express API framework
const express = require("express")
const app = express();
//importing mysql
const mysql = require("mysql")
//port number
const PORT = process.env.PORT || 5000;

//connection to mysql
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employee",
});

//initilization of connection
connection.connect();


//API
//GET request and response are the parameters
app.get("/api/members", (req, res) =>{
    //create a query
    connection.query("SELECT * FROM userdata",(err, rows, fields)=>{
        //checking errors
        if(err) throw err;
        //response
        //key value pair
        res.json(rows);
    });
});

app.get("api/members/:id" ,(req, res)=>{
    const id=reg.params.id;
    connection,query(`SELECT * FROM userdate WHERE id=${id}`, (err, rows, feilds)=>{

        if(rows,length > 0){
            res.json(rows);
        }else{ 
            res.status (400).json({msg}:));
        }
    })
})


app.listen(5000, () => {
    console.log(`Server is running in port ${PORT}`);
})