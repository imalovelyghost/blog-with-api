var settings = {
    "url": "https://jsonplaceholder.typicode.com/comments",
    "method": "GET",
    "timeout": 0,
    "headers": {
        // "Cookie": "__cfduid=d12b01d3ceae659af7cb67296ef754e861619683275"
    },
};

$.ajax(settings).done(function(item) {
    console.log(item);
    var comments = [];

    $.each(item, function(key, val) {
        //COMMENTS - postId
        let commentPostId = val.postId
            //COMMENTS - id
        let commentId = val.id
            //COMMENTS - name
        let commentName = val.name
            //COMMENTS - email
        let commentMail = val.email
            //COMMENTS - body
        let commentBody = val.body
            //Send the data
        comments.push("<h1>COMMENT</h1><div class = 'blog-comment' id='" + key + "'>" + " <br>commentPostId> " + commentPostId + " <br> commentId> " + commentId + " <br> commentName> " + commentName + " <br> commentMail> " + commentMail + " <br> commentBody> " + commentBody + "</div > ");
    });
    $("<ul/>", {
        "class": "my-comment-list",
        html: comments.join("")
    }).appendTo("body");
});