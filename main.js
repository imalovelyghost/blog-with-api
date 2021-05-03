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
            // console.log(data)
            //POSTS - title
            var postTitle = val.title
            var postId = val.id
                // console.log()
            posts.push("<li class = 'list-group-item' data-bs-toggle= 'modal' data-bs-target='#myModal' id='" + key + "' myPostId='" + postId + "' >" + postTitle + " </li>");
            // posts.push("<li class = 'list-group-item' data-bs-toggle= 'modal' data-bs-target='#myModal' id='" + key + "'>" + postTitle + " </li>");

        }); //EACH
        $("<ul/>", {
            "class": "my-post-list",
            html: posts.join("")
        }).appendTo(".main-container");
        $(".list-group-item").click(function() {
            $(".modal-title").text(data[$(this).attr("id")].title);
            $(".modal-body").text(data[$(this).attr("id")].body);
            $(".modal-body").attr("id", (data[$(this).attr("id")].id));
            var selectedComment = event.target.id
            console.log(selectedComment)
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
var selectedComment;
var settings = {
    //https://jsonplaceholder.typicode.com/posts/1/comments
    // "url": "https://jsonplaceholder.typicode.com/posts/" + selectedComment + "/comments",
    "url": "https://jsonplaceholder.typicode.com/posts/1/comments ",
    "method": "GET",
    "timeout": 0,
    "headers": {
        // "Cookie": "__cfduid=d12b01d3ceae659af7cb67296ef754e861619683275"
    },
};
//Finally, in the post modals, you must add a button that when clicked will load all the comments that belong to that post
$.ajax(settings).done(function(item) {
    //console.log(item)
    //var selectedComment
    $("#show-comments").click(function() {
            var comments = [];
            $.each(item, function(key, val) {
                //COMMENTS - postId
                var commentPostId = val.postId
                    //COMMENTS - id
                let commentId = val.id
                    //COMMENTS - name
                let commentName = val.name
                    //COMMENTS - email
                let commentMail = val.email
                    //COMMENTS - body
                let commentBody = val.body
            }); //EACH  
            // Queria concatenar esta variable a la url (selectedComment)
            console.log(item)
            comments.push("<li class = 'comments-of-post' id=' 0'> " + (item[0].body) + " </li>");
            comments.push("<li class = 'comments-of-post' id=' 1'> " + (item[1].body) + " </li>");
            comments.push("<li class = 'comments-of-post' id=' 2'> " + (item[2].body) + " </li>");
            comments.push("<li class = 'comments-of-post' id=' 3'> " + (item[3].body) + " </li>");
            comments.push("<li class = 'comments-of-post' id=' 4'> " + (item[4].body) + " </li>");
            $("<ul/>", {
                "class": "my-comments-list",
                html: comments.join("")
            }).appendTo(".modal-body");
        }) //ClICK
}); //AJAX

// $("#hide-comments").click(function() {


// })