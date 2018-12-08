const keystone = require('keystone')

exports = module.exports = (req, res) => {
  const view = new keystone.View(req, res)
  const productSlug = req.params.productSlug

  view.query('product', keystone.list('Product')
    .model.findOne({ slug: productSlug })
    .populate('images'))

  // Load products
  view.render('product', { layout: 'main' })
}
