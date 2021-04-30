var settings = {
    "url": "https://jsonplaceholder.typicode.com/users",
    "method": "GET",
    "timeout": 0,
    "headers": {
        //"Cookie": "__cfduid=d12b01d3ceae659af7cb67296ef754e861619683275"
    },
};

$.ajax(settings).done(function(element) {
    console.log(element);
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
    });
    $("<ul/>", {
        "class": "my-user-list",
        html: users.join("")
    }).appendTo("body");
});