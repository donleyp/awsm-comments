/**
 * AWS Module: Action: Modularized Code
 */
var Promise = require("bluebird");
var AWS = require("aws-sdk");
var dynamodb = new AWS.DynamoDB();
var list = require("awsm-comments").list;
Promise.promisifyAll(Object.getPrototypeOf(dynamodb));

// Export For Lambda Handler
module.exports.run = function(event, context, cb) {
    return cb(null, action(event));
};

// Your Code
var action = function(request) {
    return list(dynamodb, request.articleId, request.last, request.count);
};
