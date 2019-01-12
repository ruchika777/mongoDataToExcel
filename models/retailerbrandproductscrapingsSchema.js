const mongoose = require('mongoose');

var retailerbrandproductscrapingsSchema = mongoose.Schema({
	
	retailer_brand_scraping :{
		type: String,
		unique: true,
		allowNull: false,
		index: true

	} ,
	
	updatedAt :{
		type: Date,
		unique: true,
		allowNull: false,
		index: true

	} ,
	createdAt : {
		type: Date,
		unique: true,
		allowNull: false,
		index: true
	},

	status : {
		type: String,
		unique: true,
		allowNull: false,
		index: true
},
	isFlagged : {
		type: String,
		unique: true,
		allowNull: false,
		index: true
},
	alt_image2 : {
		type: String,
		unique: true,
		allowNull: false,
		index: true
	},
	alt_image1 : {
		type: String,
		unique: true,
		allowNull: false,
		index: true
	},
	price : {
		type: Number,
		unique: true,
		allowNull: false,
		index: true
	},
	brand : {
		type: String,
		unique: true,
		allowNull: false,
		index: true
	},
	product : {
		type: String,
		unique: true,
		allowNull: false,
		index: true	
	},
	shoppability : {
		type: String,
		unique: true,
		allowNull: false,
		index: true
	},
	product_description :{
		type: String,
		unique: true,
		allowNull: false,
		index: true
	},
	screenshot :{
		type: String,
		unique: true,
		allowNull: false,
		index: true
	},
	image : {
		type: String,
		unique: true,
		allowNull: false,
		index: true
	},
	name :	{
		type: String,
		unique: true,
		allowNull: false,
		index: true
	},
	URL : {
		type: String,
		unique: true,
		allowNull: false,
		index: true
	}
});


//var Product = module.exports = mongoose.model('retailerbrandproductscrapings', retailerbrandproductscrapingsSchema);
module.exports = retailerbrandproductscrapingsSchema;



