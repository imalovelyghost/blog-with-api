// $.ajax({
//     type: "Get",
//     url: "https://jsonplaceholder.typicode.com/posts/",
//     dataType: "json",
//     success: function(data) {
//         // $("#post-one").append("<p>Test</p>");
//         // $("#post-one").append(data);
//         console.log(data)

//     },
//     error: function() {
//         alert("json not found");
//     }
// });

// $.get("data/posts.json", function(data) {
//     $("#post-one").html(data);
//     alert("Load was performed.");
// });

//alert("putisima madre")
$.getJSON("data/posts.json", function(data) {
    console.log(data)
    var items = [];
    $.each(data, function(key, val) {
        items.push("<li id='" + key + "'>" + val + "</li>");
    });

    $("<ul/>", {
        "class": "my-new-list",
        html: items.join("")
    }).appendTo("body");
});