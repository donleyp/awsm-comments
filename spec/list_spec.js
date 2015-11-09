var list = require('../index.js').list;

var testArticleId = "aHR0cDovL2Rldi5wc2ltZXIubmV0L2dlbmVyYWwvMjAxNS8wNS8xNy9teS1leHBlcmllbmNlLWF0LWFtYXpvbi5odG1s";
var testArticleUrl = "http://dev.psimer.net/general/2015/05/17/my-experience-at-amazon.html";

describe("list", function(){
	it("exports a function", function() {
		expect(list).toBeDefined();
	});

	it("returns an error with no parameters", function(){
		expect(function() {
			list();
		}).toThrowError("articleId, last, and count are all required.");
	});

	it("returns the number an object with total, last, and count set.", function() {
		var comments = list(testArticleId, 0, 5);
		expect(comments).toBeDefined();
		expect(comments.articleId).toBe(testArticleId);
		expect(comments.articleUrl).toBe(testArticleUrl);
		expect(comments.total).toBe(5);
		expect(comments.last).toBe(4);
		expect(comments.count).toBe(5);
	});
});
