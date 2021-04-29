//GET DATA POSTS
//URL
$.getJSON("https://jsonplaceholder.typicode.com/posts", function(data) {
    var posts = [];
    //var data = JSON.stringify(data)
    $.each(data, function(key, val) {
        //console.log(data)
        console.log(key)
        console.log(val)

        //POSTS - userId   
        let postUserId = val.userId
            //POSTS - id   
        let postId = val.id
            //POSTS - title
        let postTitle = val.title
            //POSTS - body
        let postBody = val.body


        //posts.push("<div id='" + key + "'>" + val + "</div>");

        posts.push("<h1>POST</h1><div class = 'blog-post' id='" + key + "'>" + " <br>postUserId> " + postUserId + " <br> postTitle> " + postTitle + " <br> postId> " + postId + "<br> postBody> " + postBody + "</div>");
    });
    $("<ul/>", {
        "class": "my-post-list",
        html: posts.join("")
    }).appendTo(".col-md-8");
});

//GET DATA USERS

$.getJSON("https://jsonplaceholder.typicode.com/users", function(element) {
    var users = [];

    $.each(element, function(key, val) {
        //USERS - id
        let userUserId = val.userId
        console.log(val.userId)
            //USERS - username
        let userUserName = val.username

        console.log(val.username)
            //USERS - email
        let userEmail = val.email
        console.log(val.email)

        users.push("<h1>USERS</h1><div class = 'blog-user' id='" + key + "'>" + " <br>userUserId> " + userUserId + " <br> userUserName> " + userUserName + " <br> userEmail> " + userEmail + "</div>");
        //console.log(items)
    });
    $("<ul/>", {
        "class": "my-user-list",
        html: users.join("")
    }).appendTo("body");
});

//GET COMMENTS USERS 

$.getJSON("https://jsonplaceholder.typicode.com/comments", function(item) {
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

        comments.push("<h1>COMMENT</h1><div class = 'blog-comment' id='" + key + "'>" + " <br>commentPostId> " + commentPostId + " <br> commentId> " + commentId + " <br> commentName> " + commentName + " <br> commentMail> " + commentMail + " <br> commentBody> " + commentBody + "</div > ");
        //console.log(items)
    });
    $("<ul/>", {
        "class": "my-comment-list",
        html: comments.join("")
    }).appendTo("body");
});