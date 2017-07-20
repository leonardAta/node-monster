const mongoose = require('mongoose');
const Store = mongoose.model('Store');


exports.homePage = (req, res) => {
	req.flash('error', 'Oops, Something Happened');
	req.flash('info', 'Something Happened');
	req.flash('warning', 'Something Happened');
	req.flash('success', 'Something Happened');
 	res.render('index');
};

exports.addStore = (req, res) => {
	res.render('editStore', { title: 'Add Store' });
}; 

exports.createStore = async (req, res) => {
	const store = new Store(req.body);
	await store.save();
	req.flash('success', `Successfully Created ${store.name}. Care to leave a review?`);
	res.redirect(`/store/${store.slug}`);
};

exports.getStores = async (req, res) => {
	//1. Query the database for a list of all stores
	const stores = await Store.find();
	res.render('stores', { title: 'Stores', stores: stores });
};

exports.editStore = async(req, res) => {
	//1. find the store given the ID
	const store = await Store.findOne({ _id: req.params.id });
	res.json(store);
	//2. confirm they are the owner of the store
	//3. Render out the edit form so the user can update their store
}