var comments = [];
var commento = $("#addComment");


$('.form-check-input').click(function () {
    var opinion = $('.form-check-input:checked').val();
    $('#opinion').html("Hai ritenuto l'articolo " + opinion + '. Grazie per il feedback!')
})



function addComments() {
    var comment = commento.val();
    if (comment != "") {
        var com = new Comment(comment);
        comments.push(com);
        showComment();
    }
}

function showComment() {
    buildComment(comments[comments.length - 1].getText());
}

function buildComment(c) {
    return  $("#commentDone").append(
        ' <p class="badge badge-light">Luca</p>' + '<div class="card"><div class="card-body">' + c + '</div></div>');
}

$('#submitComment').click(addComments);