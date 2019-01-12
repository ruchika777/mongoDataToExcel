var express = require('express');
var app = express();
var router = express.Router();
var mongoose = require('mongoose');
var retailerbrandproductscrapingsSchema = require('../models/retailerbrandproductscrapingsSchema.js');
let Product = mongoose.model('retailerbrandproductscrapings', retailerbrandproductscrapingsSchema);
var Excel = require('exceljs');
async = require('async');
var excelFilePath = "./NewExcelSheet.xlsx";

		var workbook = new Excel.Workbook();
		var newSheet = workbook.addWorksheet('TestData');
		newSheet.columns = [

			{
				header : '_id',
				key : '_id',
				width : 50
			},
			{
				header : 'retailer_brand_scraping',
				key : 'retailer_brand_scraping',
				width : 50
			},
			{
				header : 'style_number',
				key : 'style_number',
				width : 40
			},
			{
				header : 'updatedAt',
				key : 'updatedAt',
				width : 30
			},
			{
				header : 'createdAt',
				key : 'createdAt',
				width : 30
			},
			{
				header : 'status',
				key : 'status',
				width : 10
			},
			{
				header : 'isFlagged',
				key : 'isFlagged',
				width : 10
			},
			{
				header : 'alt_image2',
				key : 'alt_image2',
				width : 50
			},
			{
				header : 'alt_image1',
				key : 'alt_image1',
				width : 50
			},
			{
				header : 'price',
				key : 'price',
				width : 10
			},
			{
				header : 'brand',
				key : 'brand',
				width : 60
			},
			{
				header : 'product',
				key : 'product',
				width : 60
			},
			{
				header : 'shoppability',
				key : 'shoppability',
				width : 10
			},
			{
				header : 'product_description',
				key : 'product_description',
				width : 100
			},
			{
				header : 'screenshot',
				key : 'screenshot',
				width : 60
			},
			{
				header : 'image',
				key : 'image',
				width : 90
			},
			{
				header : 'name',
				key : 'name',
				width : 90
			},
			{
				header : 'URL',
				key : 'URL',
				width : 80
			}

		];

//Display AllRecords
//Get
router.get('/allRecords',function(req, res){
	Product.find({}).limit(10).exec((err,data) => {

		if(err){
			res.send(err);
		}
		else{
	
		async.eachSeries(data, (object, callback)=>{

			//Create an object  to enter row
			let rowData = {};
			rowData['_id'] = object._id;
			rowData['retailer_brand_scraping'] = object.retailer_brand_scraping;
			rowData['style_number'] = object.style_number;
			rowData['updatedAt'] = object.updatedAt;
			rowData['createdAt'] = object.createdAt;
			rowData['status'] = object.status;
			rowData['isFlagged'] = object.isFlagged;
			rowData['alt_image2'] = object.alt_image2;
			rowData['alt_image1'] = object.alt_image1;
			rowData['price'] = object.price;
			rowData['brand'] = object.brand;
			rowData['product'] = object.product;
			rowData['shoppability'] = object.shoppability;
			rowData['product_description'] = object.product_description;
			rowData['screenshot'] = object.screenshot;
			rowData['image'] = object.image;
			rowData['name'] = object.name;
			rowData['URL'] = object.URL;
			//console.log(object._id);
			newSheet.addRow(rowData);
			//console.log(rowData);
			//console.log(newSheet);
			callback();

		}, function(){
			workbook.xlsx.writeFile(excelFilePath)
        .then(function () {

            console.log("Excel file created sucessfully");
        });

    });
	 
		}
		
	});
	res.send("Success");
});

module.exports = router;