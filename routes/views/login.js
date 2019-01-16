var keystone = require('keystone');
var firebase = require('firebase');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = 'login';

  view.on('post', function (next) {
    console.log('post')
    const email = req.body.inputEmail;
    const password = req.body.inputPassword;

    // firebase auth method referred from - 
    // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithEmailAndPassword

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function (user) {
        console.log(user)
        console.log("logged in successfully")
        res.redirect('/')
      }).catch(function (error) {
        console.log(error.message)
        /* TODO (Minjun) - login error message
          when login error, show error message on client
          (flash message? alert? or message in div?)
        */
        req.flash('warning', error.message)
        next()
      })

  });

  view.render('login', { layout: 'main' });
};
