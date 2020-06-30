//Classes
/*class List {
    constructor(){
        
        this.data = [];
    }

    add(data) {
        
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{
    constructor() {
        super();

        this.usuario = 'Flávio';
    }

    user() {

        console.log(this.usuario);
    }

}

const MinhaLista = new TodoList();

document.getElementById('novoTodo').onclick = function(){
    
    MinhaLista.add("NewTodo");
    MinhaLista.user();
};*/

//Arrays Functions
/*const arr = [1,3,4,5,8,9];

const newArr = arr.map(function(item, index) {
    
    return item+index;
});

const sum = arr.reduce((total, next) => {

    return total+next;
});

const filter = arr.filter(item => item%2 === 0);

const find = arr.find(function(item) {

    return item === 4;
});

console.log(newArr);
console.log(sum);
console.log(filter);
console.log(find);*/

//Desestruturação
const usuario = {
    nome: 'Flávio',
    idade: 18,
    endereco: {
        cidade: 'Picos',
        estado: 'Piauí'
    },
};

//const {nome, idade, endereco: {cidade}} = usuario;
//console.log(nome, idade, cidade);

function mostraUsuario({nome}) {

    console.log(nome);
}

mostraUsuario(usuario);