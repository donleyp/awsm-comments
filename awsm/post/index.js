/**
 * AWS Module: Action: Modularized Code
 */
var
    base64url = require("base64-url"),
    moment = require("moment");

// Export For Lambda Handler
module.exports.run = function(event, context, cb) {
    console.log(event)
  	return cb(null, action(event));
};

// Your Code
var action = function(doc) {
    var url = base64url.decode(base64url.unescape(doc.articleId));
    return {
		"articleId": doc.articleId,
		"sequenceId": 1,
		"articleUrl": url,
        "dateTimePosted": moment().toISOString(),
        "posterIdentityId": doc.identityId,
        "comment": doc.comment
    };
};
