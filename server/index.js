const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    user: 'root',
    host: localhost,
    password: '',
    database: 'employeeSystem';
});

app.post('/create', (req, rest));

app.listen(3001, ()=>{
    console.log("yea boss, primul tau server merge la portul 3001")
});