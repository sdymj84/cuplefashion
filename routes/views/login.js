var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'login';

	view.on('get', function (next) {
		console.log('get')
		next()
	})

	view.on('post', function (next) {
		console.log('post')
		next()
	})

	// Render the view
	view.render('login', { layout: 'main' });
};
