var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem('list_todos')) ||[
    'Fazer café',
    'Estudar javascript',
    'Acessar a comunidade'
];

function renderTodos() {

    listElement.innerHTML = '';

    for(todo of todos) {
        var todoElement = document.createElement('li');
        var textElement = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        var textLink = document.createTextNode('Excluir');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        linkElement.appendChild(textLink);

        todoElement.appendChild(textElement);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    };
};

renderTodos();

function addTodo() {
    var todoText = inputElement.value;
    
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveStorage();
}

function saveStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}