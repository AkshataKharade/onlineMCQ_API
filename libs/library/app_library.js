'use strict';
const promise = require('bluebird');
const pg = promise.promisifyAll(require('pg'),{multiArgs:true});
const pgpool = require('pg-pool');
const fs = require('fs');
const unirest = require('unirest');
const jwt = require('jsonwebtoken');
const crypto = require('crypto-js');
const moment = require('moment-timezone');
const bcrypt = require('bcrypt');
const database = require('../../config/database');
const config = require('../../config/config');


let _self = module.exports = {

    getDatabase(){
        return database;
    },

    getConfig(){
        return config;
    },

    getjsonToken(){
        return jwt;
    },

    getCrypto(){
        return crypto;
    },

    getBcrypt(){
        return bcrypt;
    },

    getPromise(){
        return promise;
    },

    getpgpool(){
        return pgpool;
    },

    getunirest(){
        return unirest;
    },

    getFs(){
        return fs;
    },

    getMoment(time){
        return moment(time);
    }

}