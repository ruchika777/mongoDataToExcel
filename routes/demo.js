'use strict';
const mongotocsv = require('mongo-to-csv');
let options = {
    database: 'omniconnect', // required
    collection: 'retailerbrandproductscrapings', // required
    fields: ['_id', 'retailer_brand_scraping', 'style_number', 'updatedAt', 'createdAt', 'status', 'isFlagged', 'alt_image2', 'alt_image1', 'price', 'brand', 'product', 'shoppability', 'product_description', 'screenshot', 'image', 'name', 'URL'], // required
	output: './ExcelSheet.xlsx', // required
    //allValidOptions: '-q \'{ "name": "cat" }\'' // optional
};
mongotocsv.export(options, function (err, success) {
    console.log(err);
    console.log(success);
});