import {createSignal} from 'solid-js';
import {createStore} from 'solid-js/store';
export const [todo, setTodo] = createStore([])
let todoId = 0;
export function addTodo(title,description) { 
    setTodo([...todo, ({id:todoId++, title, description, completed: false})]);
    console.log(todo.length);
    console.log(title, description);
}

export function getTodos(completed){
    var totalTodoList = todo;
    var Todos = totalTodoList.filter((item)=> item.completed === completed);
    console.log("completed=",{completed}, Todos.length)
    return Todos;
}
export const toggleTodo=(id)=>{
    setTodo(
        (todo)=>todo.id === id,
        "completed",
        (completed) => !completed
    );
}

export default addTodo;

