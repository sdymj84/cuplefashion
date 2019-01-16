var keystone = require('keystone');
var firebase = require('firebase');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  console.log('signout?')
  firebase.auth().signOut()
    .then(() => {
      res.redirect('/')
    }).catch((err) => {
      next(err)
    })
};
