const mongoose = require('mongoose');



const connectionUrl = 'mongodb://127.0.0.1:27017'
const dbName = 'localDataBase'

let dbSet;

mongoose.connect(`${connectionUrl}/${dbName}`, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log('connected !!!')
    })
    .catch(err => {
        console.log(err)
    })



module.exports = mongoose