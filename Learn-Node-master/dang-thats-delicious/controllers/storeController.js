const mongoose = require('mongoose');
const Store = mongoose.model('Store');


exports.homePage = (req, res) => {
	console.log(req.name);
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