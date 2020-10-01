var posts=[];
var titolo=$("#title");
var articolo=$("#article");
var public=$( "#pubblic" );

posts.push(new Post("BabboNatale", "jdnewbfiuerlfu3vrfulrvubdjcbwejfb",true));
posts.push(new Post("Maradona", "ducuwvefkuyvewbfkuhmwebfde",true));

function addPost() {
    closeModal();
    if( public.prop( "checked" ) ) {
        var p = new Post(titolo.val(), articolo.val(),true);
        posts.push(p);
        showPost();   
    } else {
        alert("Salvato come bozza");
    }
    resetModal();
}

function closeModal(){
    $("#addPost").modal("hide");
}

function resetModal(){
    titolo.val("");
    articolo.val("");
}

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

$(document).ready(showPosts);
$('#invia').click(addPost);