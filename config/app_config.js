'use strict';

let CREATECONTROLLER = require('../src/createTest/controller');
let EVALUATECONTROLLER = require('../src/evaluateTest/controller');
let REPORTSCONTROLLER = require('../src/reports/controller');


module.exports = {
	"createTest":{
		"controller": CREATECONTROLLER	
	},
	"evaluateTest":{
		"controller": EVALUATECONTROLLER	
	},
	"reports":{
		"controller": REPORTSCONTROLLER	
	},

}