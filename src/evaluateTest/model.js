'use strict';

let oEngage = require('../../libs/interactor/db_engage');

let _self = module.exports = {

	getPinCodeInfo(){
		return oEngage.query(`logger`,`select distinct (pincode) from india_pin_code_1 where pincode not in (select distinct(pincode)::int FROM pincode)`)
	}

}