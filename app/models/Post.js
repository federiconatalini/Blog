class Post {
    constructor(title, text, pubblico) {
        this.title = title;
        this.text = text;
        this.pubblico = pubblico;
    }

    getTitle() { return this.title; }

    setTitle(title) { this.title = title; }

    getText() { return this.text; }

    setText(text) { this.text = text; }

    getPublic() { return this.public; }

    setPublic(pubblico) { this.pubblico = pubblico; }
}