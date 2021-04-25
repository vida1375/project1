const userRouter = require('./routes/user')
const bookRouter = require('./routes/book')
const express = require('express');
const bodyParser = require('body-parser')
const mongoConnect = require('./utiles/database')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(userRouter)
app.use(bookRouter)
app.listen(3000,console.log("app listen in port 3000"))
