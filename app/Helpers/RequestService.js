 var http = require('http');
 var qs = require('qs');
 var cloudscraper = require('cloudscraper');
 module.exports = {
   Get: function(url, params, headers) {
     return new Promise(function(resolve, reject) {
       cloudscraper.get(`${url}?${qs.stringify(params)}`, function(error, response, body) {
         try {
           body = JSON.parse(body);
         } catch (e) {
           body = null;
         }
         resolve(body);
       }, function(err) {
         reject({
           StatusCode: 1,
           data: null
         });
         sails.log.warn(`REQUEST FAILED`, err);
       });
     });
   },
   Post: function(options) {
     return new Promise(function(resolve, reject) {
       cloudscraper.post(options).then(function(data) {
         try {
           data = JSON.parse(data);
         } catch (e) {
           sails.log.warn(e);
           data = null
         }
         resolve(data);
       }).catch(function(err) {
         sails.log.warn(err);
         reject({
           StatusCode: 1,
           data: null
         });
       });
     });
   }
 };
