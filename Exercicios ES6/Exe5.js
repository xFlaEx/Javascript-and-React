//5.1 - REST
const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

const soma = (...params) => params.reduce((total, next) => total+next);
/*function soma(...params){

    return params.reduce(function(total, next) {

        return total+next;
    })
}*/
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

//5.2 - SPREAD
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
};

const usuario2 = {...usuario, nome: 'Gabriel'};
const usuario3 = {...usuario, cidade: 'Lontras'};

console.log(usuario2);
console.log(usuario3);