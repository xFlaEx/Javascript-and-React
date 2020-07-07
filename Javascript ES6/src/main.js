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

/*const usuario1 = {

    nome: 'Flávio',
    idade: 18,
    empresa: 'The Black Mamba'
}

const usuario2 = {...usuario1, nome: 'Pedro'};

console.log(usuario2);*/

//Webpack Server
//1.1
/*import ClasseUsuario, {idade as IdadeUsuario} from './funcoes';

console.log(ClasseUsuario.info());
//1.2 and 1.3
console.log(IdadeUsuario);*/

//Async/Await
/*const minhaPromise = () => new Promise((resolve, reject) => {

    setTimeout(() => { resolve('OK') }, 2000);
});

(minhaPromise().then(response => {

    console.log(response);
});*/

/*async function executaPromise() {

    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}*/

/*const executaPromise = async() => {

    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromise();*/

//Configurando Axios
/*import axios from 'axios';

class Api {

    static async getUserInfo(username) {

        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);

            console.log(response);
        } catch(err) {

            console.warn('Erro na API');
        }
    }
}

Api.getUserInfo('xFlaEx');*/

//Aplicação com ES6+
import api from './api';

class App {
    constructor() {

        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }

    registerHandlers() {

        this.formEl.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true) {

        if(loading === true) {

            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Loading'));
            loadingEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEl);
        } else {

            document.getElementById('loading').remove();
        }
    }

    async addRepository(event) {

        event.preventDefault();

        const repoInput = this.inputEl.value

        if (repoInput.lenght === 0){
            return;
        }

        this.setLoading();

        try{

        const response = await api.get(`/users/${repoInput}`);

        const {name, descripition, html_url, avatar_url} = response.data;

        console.log(response);

        this.repositories.push({

            name,
            descripition,
            avatar_url,
            html_url,

        });

        this.render();
        } catch(err){

            alert('O repositório não existe!')
        }
        
        this.setLoading(false);
    }

    render() {

        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {

            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.descripition));

            let linkEl = document.createElement('a')
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        })
    }
}

new App();