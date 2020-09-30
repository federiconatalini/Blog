
$("#submitComment").click(function () {
    var comment = $("#addComment").val();
    if (comment != "") {
        $("#commentDone").append(
            ' <p class="badge badge-light">Luca</p>' + '<div class="card"><div class="card-body">' + comment + '</div></div>');
    }
})

$(document).ready(function () {
    var n = $(".card").length;
    $("#count").html(n);
})

$('.form-check-input').click(function () {
    var opinion = $('.form-check-input:checked').val();
    $('#opinion').html("Hai ritenuto l'articolo " + opinion + '. Grazie per il feedback!')
})


function addArticle() {
    var titolo = $("#title").val();
    var articolo = $("#article").val();
    var a = new Post(titolo, articolo);
    return $("#articleContenitor").html('<div class="row">' +
        '<div class="col-md">' +
        '<div class="media-body">' +
        '<h5 class="mt-0">' + a.title + '</h5>' + a.text +
        '</div></div>');
}



var b = new Post("BabboNatale", "jdnewbfiuerlfu3vrfulrvubdjcbwejfb");
var m = new Post("Maradona", "ducuwvefkuyvewbfkuhmwebfde");
posts = [b, m];

function showPosts() {
    for (var i = 0; i < posts.length; i++) {
        buildCard(posts[i].title, posts[i].text);
    }
}
function showPost() {
    buildCard(posts[posts.length - 1].title, posts[posts.length - 1].text);
}

function buildCard(title, text) {
    return $("#postContainer").append('<div class="card bg-light mb-3 mx-auto" style="max-width: 18rem;">' +
        '<div class="card-header"><h5 class="card-title">' + title + '</h5></div>' +
        '<div class="card-body">' +
        '<p class="card-text">' + text + '</p></div></div>');
}

function addPost() {
        var check = $( "#pubblic" );
        if( check.prop( "checked" ) ) {
            var titolo = $("#title").val();
            var articolo = $("#article").val();
            var p = new Post(titolo, articolo);
            posts.push(p);
            showPost();   
        } else {
            alert("Salvato come bozza");
        }
}

$(document).ready(showPosts);
$('#invia').click(addPost);


