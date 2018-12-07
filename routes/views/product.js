const keystone = require('keystone')

exports = module.exports = (req, res) => {
  const view = new keystone.View(req, res)
  const productId = req.params.productId

  view.query('product', keystone.list('Product')
    .model.findOne({ _id: productId })
    .populate('mainImage'))

  // Load products
  view.render('products', { layout: 'main' })
}
