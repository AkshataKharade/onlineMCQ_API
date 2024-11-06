'use strict';

let app_config = require('../../config/app_config');
let routes = require('../../config/routes').routes;

let _self = module.exports = {

	getMethod:(req,res,next)=>{
		console.log(req.headers);
		if(req.headers['user-agent']){
			let service = routes[req.url.split('?')[0]].split('.');
			app_config[service[0]]['controller'][service[1]](req,res,next)
		} else {
			res.send(401)
		}
	},

	postMethod:(req,res,next)=>{
		console.log(req.headers);
		console.log(req.body);
		if(req.headers['user-agent']){
			let service = routes[req.url.split('?')[0]].split('.');
			app_config[service[0]]['controller'][service[1]](req,res,next)
		} else {
			res.send(401)
		}
	}

}