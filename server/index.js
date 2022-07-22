const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'employeeSystem'
});

app.post('/create', (req, rest) => {
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;

    db.query('INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)', [name,age,country, position, wage], 
    (err, result) => {
        if(err){
            console.log(err)
        }else{
            result.send("Values Inserted");
        }
    }
    
    );
});
app.listen(3001, ()=>{
    console.log("yea boss, primul tau server merge la portul 3001")
});