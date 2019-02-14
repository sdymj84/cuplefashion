var keystone = require('keystone');
var firebase = require('firebase');
var Types = keystone.Field.Types;

/**
 Error occurred when you try to add customer info in admin page.

 FIXME: need to fix.
 */
var Customer = new keystone.List('Customer');

Customer.add({
	uid: { type: Types.Text },
	name: { type: Types.Name, required: true },
	email: { type: Types.Email, initial: true, required: true, unique: true },
	phoneNumber: { type: Types.Text },
	address: {
		address1: { type: Types.Text },
		address2: { type: Types.Text },
		city: { type: Types.Text },
		state: { type: Types.Text },
		zipcode: { type: Types.Number },
	}
});

Customer.defaultColumns = "name, email"

// when admin adds customer manually from admin page, 
// this middleware adds customer from Firebase as well
Customer.schema.post('save', (doc, next) => {
	if (!doc.uid) {
		console.log("New customer is added from admin page - adding from Firebase too")
		firebase.auth().createUserWithEmailAndPassword(doc.email, "test123")
			.then((user) => {
				const uid = user.user.uid
				Customer.model.updateOne(
					{ _id: doc._id },
					{ $set: { uid: uid } }
				).then(() => next())
			}).catch((error) => {
				console.log(error.message)
				next(error)
			})
	} else {
		next()
	}
})

Customer.register();
