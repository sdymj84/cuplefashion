const keystone = require('keystone')

exports = module.exports = (req, res) => {
  const view = new keystone.View(req, res)
  const locals = res.locals

  // Set menu in navbar
  locals.section = 'products'

  // Load products
  view.query('products', keystone.list('Product').model.find())

  view.render('products')
}