class Matematica {

    static soma(a, b) {

        return a+b;    }
}

document.getElementById('novoTodo').onclick = function(){
    
    console.log(Matematica.soma(2, 2));
};