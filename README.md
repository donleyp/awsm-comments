# awsm-comments - an AWS Module to implement a simple commenting system.

## TODO
1. Create Cognito Identity Pool. Done. ItentityPoolId = us-east-1:6dcb5de9-d577-4e33-8d5c-d634b1f727a4
2. Create dev test app on FB. Done. AppId = 1483706661937852
3. Create simple API for authed users (POST /comments)
4. Create simple API for unauthed users (GET /comments)
5. Grant Cognito users access to each API.

## API

### Type Definitions

articleId - the "id" of an article. This is a url-safe, base64 encoded string representation of the fully qualified URL of the article. Please note that by fully-qualified we mean all of it including the protocol so https and http links to the same article are completely different. Be sure to be consistent in your use of protocols here.

timestamp - ISO 8601 formatted time in UTC.

### GET /comments/{articleId}\[?lastId=#\]\[&count=#\]
Returns a list of comments for the given article orderd by "dateTimePosted".

articleId = The fully qualified URL of the article encoded as base64.
last = The last sequence number seen by the caller.
count = The number of comments requested up to a maximum of 200.

The return value is a JSON object with the following format:

    {
        "articleId": "aHR0cDovL2Rldi5wc2ltZXIubmV0L2dlbmVyYWwvMjAxNS8wNS8xNy9teS1leHBlcmllbmNlLWF0LWFtYXpvbi5odG1s",
        "articleUrl": "http://dev.psimer.net/general/2015/05/17/my-experience-at-amazon.html",
        "total": <# of comments on article>,
        "last": <sequenceNumber of the last comment>,
        "count": <# of comments included in this response>,
        "comments": [
            {
                "sequenceNumber": #,
                "dateTimePosted": "2015-11-07T13:33:44.333Z",
                "posterIdentityId": "<IdentityId>",
                "comment": "the text of the comment."
            }
        ]
    }

### POST /comments/{articleId}
Creates a new comment on the given article.

articleId = The fully qualified URL of the article encoded as base64.

The body of the POST is a JSON object in the following format:

    {
        "comment": "the text of the comment."
    }

The method returns the following document on success:

    {
        "articleId": <articleId>
        "articleUrl": "fully qualified URL of article",
        "dateTimePosted": "2015-11-07T13:33:44",
        "posterIdentityId": "<IdentityId>",
        "comment": "the text of the comment."
    }
