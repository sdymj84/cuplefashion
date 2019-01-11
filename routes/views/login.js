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
	
	firebase.auth().onAuthStateChanged(function(user) {
	if(user)
	{
		console.log("login status");

	}
	else{
		console.log("fail");
		view.render('login',{ layout: 'main' });
	}
});
	
};
