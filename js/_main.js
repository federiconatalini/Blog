
$("#submitComment").click(function () {
    var comment = $("#addComment").val();
    if(comment!=""){
        $("#commentDone").append(
        ' <p class="badge badge-light">Luca</p>'+'<div class="card"><div class="card-body">' + comment + '</div></div>');                      }
    })

    $(document).ready(function () {
        var n = $(".card").length;
        $("#count").html(n);
    })