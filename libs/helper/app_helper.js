'use strict';
let oLibrary = require('../library/app_library');
let secretkey = 'acsod9ucj489h9ca8yr4';
let tokensecret = 'acj9084j9284';
let config = require('../../config/config');

let _self = module.exports = {

  getTokenSecret() {
    return tokensecret
  },

  generateUUID(callback) {
    let timestamp = new Date().getTime()
    let pattern = "xxxxxxxxxxxxxxxxxxxx";
    let charset = "0123456789";
    let uuid = pattern.replace(/[x]/g, () => charset[Math.floor(Math.random() * charset.length)])
    let uid = uuid + timestamp;
    callback(uid.toLowerCase())
  },

  getUUID() {
    let timestamp = new Date().getTime()
    let pattern = "xxxx-xxxx-xxxx-xxxx-xxxx";
    let charset = "abcdefghijklmnopqrstuvwxyz0123456789";
    let uuid = pattern.replace(/[x]/g, () => charset[Math.floor(Math.random() * charset.length)])
    let uid = uuid + '-' + timestamp;
    return uid.toUpperCase()
  },

  getAccountId() {
    let timestamp = new Date().getTime()
    let pattern = "xxxxxxxxxxxxxxxxxxxx";
    let charset = "abcdefghijklmnopqrstuvwxyz0123456789";
    charset += timestamp;
    let uuid = pattern.replace(/[x]/g, () => charset[Math.floor(Math.random() * charset.length)])
    let uid = uuid + timestamp;
    return uid.toUpperCase();
  },

  genPassword() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 6;
    let password = "";
    for (let i = 0; i <= passwordLength; i++) {
      let randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    return password;
  },

  encrypt(text) {
    return oLibrary.getCrypto().AES.encrypt(text, secretkey).toString();
  },

  decrypt(hash) {
    let bytes = oLibrary.getCrypto().AES.decrypt(hash, secretkey);
    let decryptedtext = bytes.toString(oLibrary.getCrypto().enc.Utf8);
    return decryptedtext;
  },

  cryptoSHA256(text) {
    return oLibrary.getCrypto().SHA256(text).toString()
  },

  base64Encode(value) {
    let base64encode = Buffer.from(value).toString('base64');
    return base64encode
  },

  base64Decode(value) {
    let base64Decode = Buffer.from(value, 'base64').toString('ascii');
    return base64Decode
  }
  
}