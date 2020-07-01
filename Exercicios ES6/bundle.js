"use strict";

//Exercício 2
var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var ident = usuarios.map(function (item) {
  return item.idade;
});
var filter = usuarios.filter(function (item) {
  if (item.idade > 18) {
    return item;
  }
});
var find = usuarios.find(function (item) {
  if (item.empresa === 'Google') {
    return item;
  }
});
var apos = usuarios.map(function (item) {
  if (item.idade * 2 < 50) {
    item.idade = item.idade * 2;
    return item;
  }
});
console.log(apos);
