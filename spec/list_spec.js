
var testArticleId = "aHR0cDovL2Rldi5wc2ltZXIubmV0L2dlbmVyYWwvMjAxNS8wNS8xNy9teS1leHBlcmllbmNlLWF0LWFtYXpvbi5odG1s";
var testArticleUrl = "http://dev.psimer.net/general/2015/05/17/my-experience-at-amazon.html";
var list_scan_response = require("./list_scan_response.json");

describe("list", function() {
	var list, ddb;
	beforeEach(function () {
		ddb = {scanAsync:function(){}};
		spyOn(ddb, "scanAsync").and.returnValue(list_scan_response);

		list = require('../lib/list.js')(ddb);
	});

	it("exports a function", function() {
		expect(list).toBeDefined();
		expect(typeof list).toBe("function");
	});

	it("returns an error with insufficient parameters.", function() {
		expect(function() {
			list()
		}).toThrowError("articleId, last, and count are all required.");
	});

	it("returns a promise.", function() {
		var rc = list(testArticleId, 0, 100);
		expect(rc).toBeDefined();
	});

	it("returns the number an object with total, last, and count set.", function() {
		var comments = list(testArticleId, 0, 5);
		expect(comments).toBeDefined();
		expect(comments.articleId).toBe(testArticleId);
		expect(comments.articleUrl).toBe(testArticleUrl);
		expect(comments.total).toBe(3);
		expect(comments.last).toBe(2);
		expect(comments.count).toBe(3);
	});
});
