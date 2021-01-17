const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')
const app = express()

app.use(bodyParser.json())

const UsersRoutes = require('./routes/users')

app.use('/users', UsersRoutes)
//Connect MongoDB
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true },() => {
    console.log("MOngoDB Connected")
})

app.listen(3000,() => console.log("Server Connected to PORT 3000"))