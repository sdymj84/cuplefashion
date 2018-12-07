var keystone = require('keystone');
var SiteInfo = keystone.list('SiteInfo');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'projects';
	/* 
		// FIXME: what the heck is the name 'projects'??
		please use readable names that each others can easily understand
	*/

	view.on('init', function (next) {

		var q = SiteInfo.model.find({}).populate('mainImage');

		q.exec(function (err, result) {
			locals.siteinfo = result;
			next(err);
		});
	});
	// Render the view
	view.render('main', { layout: 'main' });
};
