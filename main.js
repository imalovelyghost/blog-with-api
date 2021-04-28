//GET DATA POSTS
$.getJSON("data/posts.json", function(data) {
    var posts = [];

    $.each(data, function(key, val) {
        //console.log(data[1].userId)
        //console.log(data[1].id)
        //console.log(data[1].title)
        //console.log(data[1].body)
        console.log(data[0])

        posts.push("<div id='" + key + "'>" + val + "</div>");
        //console.log(items)
    });
    $("<ul/>", {
        "class": "my-new-list",
        html: posts.join("")
    }).appendTo("body");
});

//GET DATA USERS
$.getJSON("data/users.json", function(element) {
    var users = [];

    $.each(element, function(key, val) {
        //console.log(element[1].id)
        //console.log(element[1].name)
        //console.log(element[1].username)
        // console.log(element[1].email)
        console.log(element[0])

        users.push("<div id='" + key + "'>" + val + "</div>");
        //console.log(items)
    });
    $("<ul/>", {
        "class": "my-new-list",
        html: users.join("")
    }).appendTo("body");
});

//GET COMMENTS USERS
$.getJSON("data/comments.json", function(item) {
    var comments = [];

    $.each(item, function(key, val) {
        console.log(item[0])

        comments.push("<div id='" + key + "'>" + val + "</div>");
        //console.log(items)
    });
    $("<ul/>", {
        "class": "my-new-list",
        html: comments.join("")
    }).appendTo("body");
});