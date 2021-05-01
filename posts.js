//Extracted from postman - POSTS
var settings = {
    "url": "https://jsonplaceholder.typicode.com/posts",
    "method": "GET",
    "timeout": 0,
    "headers": {
        //"Cookie": "__cfduid=d12b01d3ceae659af7cb67296ef754e861619683275"
    },
};
//The main container will display the list of posts that have been received in response to the API request. Only the title of each post will be shown in this list.
$.ajax(settings).done(function(data) {
        var posts = [];
        $.each(data, function(key, val) {
            //POSTS - title
            var postTitle = val.title
            posts.push("<li class = 'list-group-item' data-bs-toggle= 'modal' data-bs-target='#myModal' id='" + key + "'>" + postTitle + " </li>");
        }); //EACH
        $("<ul/>", {
            "class": "my-post-list",
            html: posts.join("")
        }).appendTo(".main-container");

        $(".list-group-item").click(function() {
            $(".modal-title").text(data[$(this).attr("id")].title);
            $(".modal-body").text(data[$(this).attr("id")].body);
        })
    }) //AJAX

//Extracted from postman - USERS
var settings = {
    "url": "https://jsonplaceholder.typicode.com/users",
    "method": "GET",
    "timeout": 0,
    "headers": {
        //"Cookie": "__cfduid=d12b01d3ceae659af7cb67296ef754e861619683275"
    },
};
//In the posts modal, you must show the user who created that post.
$.ajax(settings).done(function(element) {
    var users = [];
    $.each(element, function(key, val) {
        //USERS - id
        let userUserId = val.userId
            //USERS - username
        let userUserName = val.username
            //USERS - email
        let userEmail = val.email
            //Send the data
            // users.push("<h1>USERS</h1><div class = 'blog-user' id='" + key + "'>" + " <br>userUserId> " + userUserId + " <br> userUserName> " + userUserName + " <br> userEmail> " + userEmail + "</div>");
    }); //EACH
    $(".list-group-item").click(function() {
        $(".modal-user").text(element[$(this).attr("id")].username);
        $(".modal-mail").text(element[$(this).attr("id")].email);
    })
}); //AJAX

var settings = {
    "url": "https://jsonplaceholder.typicode.com/comments",
    "method": "GET",
    "timeout": 0,
    "headers": {
        // "Cookie": "__cfduid=d12b01d3ceae659af7cb67296ef754e861619683275"
    },
};
//Finally, in the post modals, you must add a button that when clicked will load all the comments that belong to that post
$.ajax(settings).done(function(item) {
    //console.log(item);
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
            //comments.push("<h1>COMMENT</h1><li class = 'blog-comment' id=>" + " <br>commentPostId> " + commentPostId + " <br> commentId> " + commentId + " <br> commentName> " + commentName + " <br> commentMail> " + commentMail + " <br> commentBody> " + commentBody + "</li > ");

    }); //EACH
    $("#show-comments").click(function() {
        $("<ul/>", {
            "class": "my-comments-list",
            html: comments.join("")
        }).appendTo(".my-comments-list");
        alert("INN")

    })
}); //AJAX