//This is for Image storage
var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Image = new keystone.List('Image', {
    autokey: { path: 'slug', from: 'title', unique: true },
    map: { name: 'title' },
    defaultSort: 'title'
});

Image.add({
    title: { type: String, required: true },
    images: { type: Types.CloudinaryImages }, // store array of images
});

Image.defaultColumns = 'title, slug'
Image.register();
