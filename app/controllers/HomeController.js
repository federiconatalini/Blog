class HomeController {

    constructor() {
        this.posts = [];
        this.titolo ;
        this.articolo ;
        this.pubblico ;
        this.featured;
    }

    
    init() {
        var that=this;
        $(document).ready(function () {
            this.titolo = $("#title");
            this.articolo = $("#article");
            this.pubblico = $("#pubblico");
            this.featured = $("#featured");
            $('#invia').click(that.addPost);

            $.get({
                url: "https://texty-89895.firebaseio.com/posts.json",
                success: function (data, textStatus, jqXHR) {                   
                        for(let id in data){
                            var post=data[id];
                            that.showPosts(post);   
                        }
                                        
                }
            })
        }.bind(this))
    }

    addPost() {
        this.closeModal;
        var pub = this.pubblico.prop("checked");
        var fea = featured.prop("checked");
        var p = new Post(titolo.val(), articolo.val(), pub, fea);
        posts.push(p);
        showPost();
        resetModal();
    }

    closeModal() {
        $("#addPost").modal("hide");
    }

    resetModal() {
        titolo.val("");
        articolo.val("");
    }

    showPosts(post) {
       // let posts=this.posts;
        //for (var i = 0; i < posts.length; i++) {
            if (post.public != false) {
                if (post.featured != true) {
                    this.buildCard(post.title, post.body, post.tag);
                }
                else {
                    this.buildCardFeatured(post.title, post.body, post.tag);
                //}
            }
        }
    }

    showPost() {
        if (posts[posts.length - 1].pubblico) {
            if (posts[posts.length - 1].featured) {
                buildCardFeatured(posts[posts.length - 1].title, posts[posts.length - 1].body);
            } else {
                buildCard(posts[posts.length - 1].title, posts[posts.length - 1].body);
            }
        } else {
            alert("Salvato come bozza");
        }
    }

    buildCard(title, body, tag) {
        return $("#postContainer").append('<div class="card bg-light mb-3 mx-auto" style="max-width: 18rem;">' +
            '<div class="card-header"><h5 class="card-title">' + title + '</h5></div>' +
            '<div class="card-body">' +
            '<p class="card-text">' + body + '</p>' +
            '<span class="badge badge-secondary">' + tag + '</span></div></div>');
    }

    buildCardFeatured(title, body, tag) {
        return $("#postContainer").prepend('<div class="card bg-light mb-3 mx-auto" style="max-width: 18rem;">' +
            '<div class="card-header bg-primary"><h5 class="card-title">' + title + '</h5></div>' +
            '<div class="card-body">' +
            '<p class="card-text">' + body + '</p>' +
            '<span class="badge badge-secondary">' + tag + '</span></div></div>');
    }

}