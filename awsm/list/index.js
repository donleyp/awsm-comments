/**
 * AWS Module: Action: Modularized Code
 */
var list = require("awsm-comments").list;

// Export For Lambda Handler
module.exports.run = function(event, context, cb) {
    return cb(null, action(event));
};

// Your Code
var action = function(request) {
    return list(request.articleId, request.last, request.count);
};
