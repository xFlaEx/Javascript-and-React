//AJAX
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/xFlaEx');
xhr.send(null);

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText));
    }
}

//Promise
var minhaPromise = function() {
    return new Promise(function(resolve, reject) {

        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://api.github.com/users/xFlaEx');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else{
                    reject('Erro na Requisição!');
                }
            };
        };

    });
};

minhaPromise()
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    })

//Axios
axios.get('https://api.github.com/users/xFlaEx')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.warn(error);
    })