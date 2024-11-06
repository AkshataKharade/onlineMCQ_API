'use strict';
const oLibraries = require('../library/app_library');
const promise = oLibraries.getPromise();
const Pool = oLibraries.getpgpool();
const db = oLibraries.getDatabase();
let dbConnections = {};

let _self = module.exports = {

	getconnection(dbname){
        if(dbConnections[dbname]){
            return _self.getpgconnection(dbConnections[dbname])
        }else{
            if(db[dbname]){
                if(db[dbname]['dialect'] == 'postgres'){
                    dbConnections[dbname] = new Pool({
                        user: db[dbname]['username'], 
                        database: db[dbname]['database'],
                        password: db[dbname]['password'],
                        host: db[dbname]['host'],
                        port: db[dbname]['port'],
                        max: 2,
                        idleTimeoutMillis: 3000,
                        Promise :  promise
                    });
                    return _self.getpgconnection(dbConnections[dbname]);
                }else{
                    throw new Error(`dialect not defined...`);
                }
            } else {
                dbConnections[dbname] = new Pool({
                    user: db[dbname]['username'], 
                    database: dbname,
                    password: db[dbname]['password'],
                    host: db[dbname]['host'],
                    port: db[dbname]['port'],
                    max: 2,
                    idleTimeoutMillis: 3000,
                    Promise :  promise
                });
                return _self.getpgconnection(dbConnections[dbname]);
            }
        }
    },

    getpgconnection(dbconnection){
        return promise.using(dbconnection.connect(), function (connection) {
            return promise.try(function() {
                return connection.queryAsync('BEGIN').then(function () {
                    return connection;
                });
            }).then(function (res) {
                return connection.queryAsync('COMMIT').then(function () {
                    return res;
                }).finally(function() {});
            }).catch(function (err) {
                console.log(err);
                return connection.queryAsync('ROLLBACK').then(function () {
                    throw err;
                }).finally(function() {});
            })
        }).catch(function(err) {
            throw err;
        });
    }

}