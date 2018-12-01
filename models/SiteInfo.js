var keystone = require('keystone'),
    Types = keystone.Field.Types;

var SiteInfo = new keystone.List('SiteInfo', {
    autokey: { path: 'slug', from: 'title', unique: true },
    map: { name: 'title' },
    track: true,
    defaultSort: '-updatedAt'
});

SiteInfo.add({
    title: { type: String, required: true },
    email: { type: Types.Email },
    role: { type: String },
    description: { type: Types.Textarea },
    bio: { type: Types.Textarea },
    mainImage: { type: Types.Relationship, ref: 'Image'}
});

SiteInfo.defaultColumns = 'title, slug, state|20%'
SiteInfo.register();
