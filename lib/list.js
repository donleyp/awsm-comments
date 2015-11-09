var
	moment = require("moment"),
	base64url = require("base64-url");

module.exports = function(articleId, last, count) {
	if (articleId == null || last == null || count == null) {
		throw new Error("articleId, last, and count are all required.");
	}

	var comments = [];
	for (var i = 0; i < count; i++) {
		comments[i] = {
			"sequenceNumber": i,
            "dateTimePosted": moment().subtract(count - i, "days").toISOString(),
            "posterIdentityId": 123456789,
            "comment": "this is comment # " + i
		};
	}
  	return {
  		"articleId": articleId,
  		"articleUrl": base64url.decode(base64url.unescape(articleId)),
  		"total": count,
  		"last": count - 1,
  		"count": count,
  		"comments": comments
  	};
}