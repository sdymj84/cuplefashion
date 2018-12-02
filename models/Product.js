const keystone = require('keystone')
const Types = keystone.Field.Types

const Product = new keystone.List('Product', {
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
  mainImage: { type: Types.Relationship, ref: 'Image' },
  image1: { type: Types.Relationship, ref: 'Image' },
  image2: { type: Types.Relationship, ref: 'Image' },
  image3: { type: Types.Relationship, ref: 'Image' },
  image4: { type: Types.Relationship, ref: 'Image' },
  image5: { type: Types.Relationship, ref: 'Image' },
  image6: { type: Types.Relationship, ref: 'Image' },
  image7: { type: Types.Relationship, ref: 'Image' },
  price: { type: Number, min: 0 },
  qty: { type: Number, min: 0 },
  createdAt: { type: Date, default: Date.now }
})

Product.register()
