const User = require('../models/user')
module.exports.createNewUser = (req, res) => {
    const {name, title, assignedBooks } = req.body
        const user = new User({ name, title, assignedBooks })
           user.save()
            // return res.send('new user created', user)
}
module.exports.find = (req, res) => {
    User.find({ }, function (err, users) {
        res.json(users);
    });
}
module.exports.findById = (req, res) => {
    const { id } = req.params;
    User.findById( id , function (err, users) {
        res.json(users);
    });
}
module.exports.update = (req, res) => {
    const doc = {
        name: req.body.name,
        title: req.body.title,
        assignedBooks: req.body.assignedBooks
      };
      User.findByIdAndUpdate({_id: req.params.id}, doc, function(err, raw) {
        if (err) {
          res.send(err);
        }
        res.send(raw);
      });
}
module.exports.delete= (req, res) => {
    const { id } = req.params;
    User.findByIdAndRemove( id , function (err, users) {
    });
}
module.exports.gett= (req, res) => {
    if(req.body.title == "user") {
        const { id } = req.params;
        User.findById(id , function (err, users) {
            res.json(req.body.assignedBooks);
        });
    }else if(req.body.title == "librarian") {
         User.find({}, function (err, users) {
            res.json(req.body.assignedBooks);
         });
    }
}
