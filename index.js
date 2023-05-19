const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', require('./app/routes'))
const mysql = require("mysql");
const  con = mysql.createConnection({
  host: "localhost",
  user: "robot",
  password: "1234",
  database: "DIPUTADOS",
});


app.post("")

app.listen(3001, () => {
    console.log("app listen on port ", 3001 )
})