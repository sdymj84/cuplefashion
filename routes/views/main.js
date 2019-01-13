var keystone = require('keystone');
var SiteInfo = keystone.list('SiteInfo');
var firebase = require('firebase');
exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	
	view.on('init', function (next) {

		var q = SiteInfo.model.find({}).populate('mainImage');

		q.exec(function (err, result) {
			locals.siteinfo = result;
			next(err);
		});
	});

	/* TODO:
    
		1. hide login and signup from nav, once user login.
       */
	

	firebase.auth().onAuthStateChanged(function(user) {
		if(user)
		{
			console.log("login status");

		}
		else{
			console.log("fail");
		}
	});

		
	// Render the view
	view.render('main', { layout: 'main' });
};
