"use strict";

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
var arr = [1, 3, 4, 5, 8, 9];
var newArr = arr.map(function (item, index) {
  return item + index;
});
var sum = arr.reduce(function (total, next) {
  return total + next;
});
var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
var find = arr.find(function (item) {
  return item === 4;
});
console.log(newArr);
console.log(sum);
console.log(filter);
console.log(find);
