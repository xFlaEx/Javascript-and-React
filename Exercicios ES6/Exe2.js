//Exercício 2
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

const ident = usuarios.map(function(item) {

    return item.idade;
})

const filter = usuarios.filter(function(item) {

    if(item.idade>18){

        return item;
    }
})

const find = usuarios.find(function(item) {
    
    if(item.empresa === 'Google') {

        return item;
    }
})

const apos = usuarios.map(function(item) {

    if(item.idade*2<50) {

        item.idade = item.idade*2;
        return item;
    }
})

console.log(apos);