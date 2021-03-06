const keystone = require('keystone')
const Types = keystone.Field.Types

const Product = new keystone.List('Product', {
  // create key automatically when creating each documents 
  // the key property name will be "slug" and the value will be the same as title
  autokey: { path: 'slug', from: 'title', unique: true },
  map: { name: 'title' },
  defaultSort: 'title'
})

Product.add({
  title: { type: String, required: true },
  bulletPoint1: { type: String },
  bulletPoint2: { type: String },
  bulletPoint3: { type: String },
  bulletPoint4: { type: String },
  bulletPoint5: { type: String },
  description: { type: Types.Html, wysiwyg: true, height: 300 },
  // get images from Image model
  images: { type: Types.Relationship, ref: 'Image' },
  price: { type: Number, min: 0 },
  qty: { type: Number, min: 0 },
  createdAt: { type: Date, default: Date.now }
})

Product.register()
