'use strict';
let oMODEL = require('./model');
let oHelper = require('../../libs/helper/app_helper');
let oLibrary = require('../../libs/library/app_library');
let axios = require('axios');

let _self = module.exports = {

	sendToRabbit(req,res){
		res.send({"code":1,"res":'succesds'})
	},

	createTest(req,res){
		let mydata = req.body;
		res.send(mydata);
	}
	
}