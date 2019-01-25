var keystone = require('keystone');
var firebase = require('firebase');

exports = module.exports = function (req, res) {

    var view = new keystone.View(req, res);
    var locals = res.locals;
    locals.section = 'forgotpassword';

    view.on('post', function (next) {

        const email = req.body.inputEmail;
        var auth = firebase.auth();

        auth.sendPasswordResetEmail(email).then(function () {
            // Email sent.
            console.log("[routes/signup.js] Sent the instruction to your email")
            res.redirect('/')
        }).catch(function (error) {
            console.log(error.message)

            req.flash('warning', error.message) // send message to client
            next()
            // An error happened.
        });

    })
    // locals.section is used to set the currently selected
    // item in the header navigation.

    // Render the view
    view.render('forgot-password', { layout: 'main' });
};
