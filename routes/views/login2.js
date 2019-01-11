var keystone = require('keystone');
var firebase = require('firebase');

// I create this login2 server page for test.
// Handling form data and sign in process.

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
    locals.section = 'sign';

        /* TODO:
    
        1. Retrieve data from form
        2. After sign in, redirect to home page.
       */
   // const email = $_GET['inputEmail'];
  //  const password = $_GET['inputPassword'];
   
    // prevent submitting form
  
    // firebase auth method referred from - 
    // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithEmailAndPassword

    firebase.auth().signInWithEmailAndPassword("test123@gmail.com", "test123")
      .then(function (user) {
        console.log(user)
        console.log("logged in successfully")

 
    }).catch(function (error) {
        console.log(error.message)
        view.render('main', { layout: 'main' });
      })
	// Render the view

};
