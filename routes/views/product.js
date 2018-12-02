const keystone = require('keystone')

exports = module.exports = (req, res) => {
  const view = keystone.View(req, res)
  const locals = res.locals

  // Set menu in navbar
  locals.section = 'store'

  // Load products

}