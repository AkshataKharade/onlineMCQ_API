'use strict';
const oLibraries = require('../library/app_library');
const promise = oLibraries.getPromise();
const Pool = oLibraries.getpgpool();
const db = oLibraries.getDatabase();
let dbConnections = {};

let _self = module.exports = {



}