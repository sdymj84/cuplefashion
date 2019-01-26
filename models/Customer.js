var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Customer Model
 * ==========
 */
var Customer = new keystone.List('Customer');

Customer.add({
	uid: { type: Types.Key, unique: true },
	firstName: { type: Types.Name, required: true, index: true },
	lastName: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, unique: true, index: true },
	phoneNumber: { type: Types.Text },
	address: {
		address1: { type: Types.Text },
		address2: { type: Types.Text },
		city: { type: Types.Text },
		state: { type: Types.Text },
		zipcode: { type: Types.Number },
	}
});

Customer.register();
