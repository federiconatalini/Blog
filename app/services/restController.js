class RestController{
    constructor(){}

    get(url, onSuccess){
        $.get({
            url: url,
            success: onSuccess
        });
    }

    post(url, data, onSuccess){
        $.post({
            url: url,
            data: JSON.stringify(data),
            success: onSuccess
        });
    }

}