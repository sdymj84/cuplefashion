var keystone = require('keystone');
var firebase = require('firebase');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = 'login';

  view.on('post', function (next) {
    console.log('[routes/login.js] Login post function executed')
    const email = req.body.inputEmail;
    const password = req.body.inputPassword;

    // firebase auth method referred from - 
    // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithEmailAndPassword
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function (user) {
        const uid = user.user.uid
        console.log("User UID : " + uid)

        /* const docRef = db.collection('users').doc(uid)
        docRef.get().then(doc => {
          if (doc.exists) {
            console.log("[routes/login.js] logged in and retreived user info successfully")
            res.redirect('/')
          } else {
            console.log("No such document!")
            next()
          }
        }).catch(err => {
          console.log("Error getting document", err)
          next(err)
        }) */

      }).catch(function (error) {
        console.log(error.message)
        req.flash('warning', error.message) // send message to client
        next()
      })

  });

  view.render('login', { layout: 'main' });
};
