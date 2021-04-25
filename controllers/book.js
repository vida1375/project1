const Book = require('../models/book')
module.exports.createNewBook = (req, res) => {
    const {name, description, author,numberofbooksinlibrary } = req.body
        const book = new Book({ name, description, author,numberofbooksinlibrary })
           book.save()
            // return res.send('new user created', user)
}
module.exports.find = (req, res) => {
    Book.find({ }, function (err, books) {
        res.json(books);
    });
}
module.exports.findById = (req, res) => {
    const { id } = req.params;
    Book.findById( id , function (err, books) {
        res.json(books);
    });
}
module.exports.update = (req, res) => {
    const doc = {
        name: req.body.name,
        description: req.body.description,
        author: req.body.author,
        numberofbooksinlibrary: req.body.numberofbooksinlibrary
      };
    Book.findByIdAndUpdate({_id: req.params.id}, doc, function(err, raw) {
        if (err) {
          res.send(err);
        }
        res.send(raw);
      });
}
module.exports.delete = (req, res) => {
    const { id } = req.params;
    Book.findByIdAndRemove( id , function (err, books) {
    });
}
