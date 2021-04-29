//$(".display-4").load(function() {
//alert("Handler for .click() called.");
//});
//GET DATA POSTS
// $.getJSON("https://jsonplaceholder.typicode.com/posts", function(data) {
//     var posts = [];
//     $.each(data, function(key, val) {
//         //POSTS - userId   
//         let postUserId = val.userId
//             //POSTS - id   
//         let postId = val.id
//             //POSTS - title
//         let postTitle = val.title
//             //POSTS - body
//         let postBody = val.body
//             //Send the data
//             //posts.push("<h1>POST</h1><div class = 'blog-post' id='" + key + "'>" + " <br>postUserId> " + postUserId + " <br> postTitle> " + postTitle + " <br> postId> " + postId + "<br> postBody> " + postBody + "</div>");
//     });
//     $("<ul/>", {
//         "class": "my-post-list",
//         html: posts.join("")
//     }).appendTo(".col-md-8");

//     $.when //($.ready, data)
//     alert("IN WHEN")
//         .then(function() {
//             // main code
//             alert("FUNCTION DATA")
//         })
//         .catch(function() {
//             // handle errors
//             alert("FUNCTION ERROR")


//         })
// });

// //GET DATA USERS
// $.getJSON("https://jsonplaceholder.typicode.com/users", function(element) {
//     var users = [];

//     $.each(element, function(key, val) {
//         //USERS - id
//         let userUserId = val.userId
//             //USERS - username
//         let userUserName = val.username
//             //USERS - email
//         let userEmail = val.email
//             //Send the data
//             //users.push("<h1>USERS</h1><div class = 'blog-user' id='" + key + "'>" + " <br>userUserId> " + userUserId + " <br> userUserName> " + userUserName + " <br> userEmail> " + userEmail + "</div>");
//     });
//     $("<ul/>", {
//         "class": "my-user-list",
//         html: users.join("")
//     }).appendTo("body");
// });

// //GET COMMENTS USERS 

// $.getJSON("https://jsonplaceholder.typicode.com/comments", function(item) {
//     var comments = [];

//     $.each(item, function(key, val) {
//         //COMMENTS - postId
//         let commentPostId = val.postId
//             //COMMENTS - id
//         let commentId = val.id
//             //COMMENTS - name
//         let commentName = val.name
//             //COMMENTS - email
//         let commentMail = val.email
//             //COMMENTS - body
//         let commentBody = val.body
//             //Send the data
//             //comments.push("<h1>COMMENT</h1><div class = 'blog-comment' id='" + key + "'>" + " <br>commentPostId> " + commentPostId + " <br> commentId> " + commentId + " <br> commentName> " + commentName + " <br> commentMail> " + commentMail + " <br> commentBody> " + commentBody + "</div > ");
//     });
//     $("<ul/>", {
//         "class": "my-comment-list",
//         html: comments.join("")
//     }).appendTo("body");
// });


// //Extracted from postman
// var settings = {
//     "url": "https://jsonplaceholder.typicode.com/posts",
//     "method": "GET",
//     "timeout": 0,
//     "headers": {
//         "Cookie": "__cfduid=d12b01d3ceae659af7cb67296ef754e861619683275"
//     },
// };

// $.ajax(settings).done(function(data) {
//     console.log(data);
//     var posts = [];
//     $.each(data, function(key, val) {
//         //POSTS - userId   
//         let postUserId = val.userId
//             //POSTS - id   
//         let postId = val.id
//             //POSTS - title
//         let postTitle = val.title
//             //POSTS - body
//         let postBody = val.body
//             //Send the data
//         posts.push("<h1>POST</h1><div class = 'blog-post' id='" + key + "'>" + " <br>postUserId> " + postUserId + " <br> postTitle> " + postTitle + " <br> postId> " + postId + "<br> postBody> " + postBody + "</div>");
//     });
//     $("<ul/>", {
//         "class": "my-post-list",
//         html: posts.join("")
//     }).appendTo(".col-md-8");

//     // $.when($.ready, data)
//     // alert("IN WHEN")
//     //     .then(function() {
//     //         // main code
//     //         alert("FUNCTION DATA")
//     //         console.log(postBody)
//     //     })
//     //     .catch(function(error) {
//     //         // handle errors
//     //         alert("FUNCTION ERROR")


//     //     })
// });