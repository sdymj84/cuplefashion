var keystone = require('keystone');
var firebase = require('firebase');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'sign';

	view.on('post', function (next) {
		console.log('Signup post function executed')
		const firstName = req.body.firstName
		const lastName = req.body.lastName
		const email = req.body.emailAddress;
		const password1 = req.body.password;
		const password2 = req.body.password_re;

		// firebase auth method referred from - 
		// https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithEmailAndPassword

		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then((user) => {
				console.log(user)
				console.log("welcome!, joined and logged in successfully")
				res.redirect('/')
			}).catch((error) => {
				console.log(error.message)
				req.flash('warning', error.message) // send message to client
				next()
			})
	});

	// Render the view
	view.render('signup', { layout: 'main' });

};
