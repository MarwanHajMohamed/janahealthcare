const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors())

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "1315",
    database: "jhc",
    
});

app.post("/book", (req, res) => {

    const name = req.body.name
    const email = req.body.email
    const number = req.body.number
    const type = req.body.type
    const date = req.body.date
    const time = req.body.time

    db.query(
        "INSERT INTO bookings (name, email, number, type) VALUES (?,?,?,?)",
        [name, email, number, type, date, time],
        (err, result) => { 
            console.log(err)
    })
})

app.listen(5000, () => {
    console.log('Running server on port 5000...');
})

db.connect((err) => {
    if (!err) console.log('DB Successfully Connected!')

    else
        console.log('Database Not Connected \n Error' + JSON.stringify(err));
})