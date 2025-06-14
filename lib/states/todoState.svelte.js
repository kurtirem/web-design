import { browser } from "$app/environment";

const TODOS_KEY = "todos";
let initialTodos = [];

if (browser && localStorage.getItem(TODOS_KEY)) {
  initialTodos = JSON.parse(localStorage.getItem(TODOS_KEY));
}

let todoState = $state(initialTodos);

const saveTodos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todoState));
};

const sharedInstance = {
  get todos() {
    return todoState;
  },
  add: (todo) => {
    todoState.push(todo);
    saveTodos();
  },
  changeDone: (id) => {
    const todo = todoState.find((t) => t.id === id);
    todo.done = !todo.done;
    saveTodos();
  },
  remove: (id) => {
    todoState = todoState.filter((t) => t.id !== id);
    saveTodos();
  },
};

export const useTodoState = () => sharedInstance;