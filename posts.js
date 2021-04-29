//Extracted from postman - POSTS
var settings = {
    "url": "https://jsonplaceholder.typicode.com/posts",
    "method": "GET",
    "timeout": 0,
    "headers": {
        //"Cookie": "__cfduid=d12b01d3ceae659af7cb67296ef754e861619683275"
    },
};

$.ajax(settings).done(function(data) {
    console.log(data);
    var posts = [];
    $.each(data, function(key, val) {
        //POSTS - userId   
        let postUserId = val.userId
            //POSTS - id   
        let postId = val.id
            //POSTS - title
        let postTitle = val.title
            //POSTS - body
        let postBody = val.body
            //Send the data
        posts.push("<h1>POST</h1><div class = 'blog-post' id='" + key + "'>" + " <br>postUserId> " + postUserId + " <br> postTitle> " + postTitle + " <br> postId> " + postId + "<br> postBody> " + postBody + "</div>");
    });
    $("<ul/>", {
        "class": "my-post-list",
        html: posts.join("")
    }).appendTo(".col-md-8");
});