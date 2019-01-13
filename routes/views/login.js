var keystone = require('keystone');
var firebase = require('firebase');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;


  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = 'login';


  // Render the view
	/* TODO:
   
	   1. redirect to home page.
	  */

  view.on('get', function (next) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("user is already logged in, so redirect to main page");
        res.redirect('/');
      }
      else {
        console.log("user is not logged in, so redirect to login page");
        next()
      }
    });
  });

  view.on('post', function (next) {
    console.log('post')
    const email = req.body.inputEmail;
    const password = req.body.inputPassword;
    // prevent submitting form
    // firebase auth method referred from - 
    // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithEmailAndPassword

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function (user) {
        console.log(user)
        console.log("logged in successfully")
        res.redirect('/')
      }).catch(function (error) {
        console.log(error.message)
        next()
      })
  });

  // res.redirect('/signin')
  view.render('login', { layout: 'main' });
};
