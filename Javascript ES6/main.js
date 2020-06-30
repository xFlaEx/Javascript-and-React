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
/*const usuario = {
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

mostraUsuario(usuario);*/

//REST

/*const usuario = {

    nome: 'Flávio',
    idade: 18,
    empresa: 'The Black Mamba'
}

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);*/

/*const arr = [1,2,3,4,5]

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);*/

/*function soma(...params) {

    return params.reduce((total, next) => total+next);

};

console.log(soma(1,4,5));*/

//SPREAD
/*const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);*/

const usuario1 = {

    nome: 'Flávio',
    idade: 18,
    empresa: 'The Black Mamba'
}

const usuario2 = {...usuario1, nome: 'Pedro'};

console.log(usuario2);