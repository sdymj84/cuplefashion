var keystone = require('keystone');
var firebase = require('firebase');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  firebase.auth().signOut()
    .then(() => {
      console.log('[routes/logout.js] User successfully logged out')
      res.redirect('/')
    }).catch((err) => {
      next(err)
    })
};
