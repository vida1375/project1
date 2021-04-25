const bookController = require('../controllers/book')
const express = require('express')
const router = express.Router()
router.post('/newBook',bookController.createNewBook)
router.get('/newBook1',bookController.find)
router.get('/newBook1/:id',bookController.findById)
router.put('/update/:id',bookController.update)
router.delete('/delete/:id',bookController.delete)
module.exports = router