'use strict';

const oLibrary = require('../library/app_library');
const dbsettings = require('./db_setting');
const promise = oLibrary.getPromise();

let _self = module.exports = {

	query(dbname,query,wherevalue){
        if(dbname == null || dbname == undefined || dbname == ''){
            throw new Error('Please Specify Database Name..');
        }

        if(wherevalue == undefined){
            wherevalue = [];
        }
        console.log(dbname,query,wherevalue);
        return promise.using(dbsettings.getconnection(dbname),function(tranx){
            return tranx.queryAsync(query,wherevalue).then(function(rows){
                if(rows[0]['rows']){
                    return rows[0]['rows'];
                }else{
                    return rows;
                }
            }).catch(function(err){
                throw err
            }).finally(function(){
                tranx.release();
            });
        })
    }


}