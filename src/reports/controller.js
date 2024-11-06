'use strict';
let oMODEL = require('./model');
let oHelper = require('../../libs/helper/app_helper');
let oLibrary = require('../../libs/library/app_library');
let axios = require('axios');

let _self = module.exports = {

	sendToRabbit(index,length,callback){
		console.log(index)
		if(index <= length){
			let msg = {
				text:'New notification data!',
				id:index
			}
			let message = JSON.stringify(msg);
			oHelper.publishToRabbit(message,(response)=>{
				console.log(response);
				setTimeout(()=>{
					_self.sendToRabbit(++index,length,callback)	
				},3)
			});
		} else {
			callback('success')
		}
	}
	
}