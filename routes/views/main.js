var keystone = require('keystone');
var SiteInfo = keystone.list('SiteInfo');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'projects';
	/* 
		 what the heck is the name 'projects'??
		please use readable names that each others can easily understand
	*/

	view.on('init', function (next) {

		var q = SiteInfo.model.find({}).populate('mainImage');
		/* 
			질문!
			populate()은 뭐하는 거야?
			위에서 SiteInfo 에서 데이터를 가져오니까 사이트인포 모델의 필드중 하나인
			mainImage 도 같이 q 에 들어가는거라고 생각했는데
			populate() 로 따로 불러줘야 하는거야??
			Types.Relationship 으로 연결된 필드는 항상 저렇게 populate()로
			불러줘야 하는건가??
		*/

		q.exec(function (err, result) {
			locals.siteinfo = result;
			next(err);
		});


	});
	// Render the view
	view.render('main', { layout: 'main' });
};
