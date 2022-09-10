import {createSignal} from 'solid-js';

export const [todo, setTodo] = createSignal([])
let todoId = 0;
export const addTodo = (title,description)=> {
    setTodo([...todo(), {id:todoId++, title, description, completed: false}]);
    console.log(todo().length);
    console.log(title, description);
}
export const toggleTodo=(id)=>{
    target = todo().find((todo)=>{
        todo.id === id
    });
    if(target){
        target.completed = !target.completed;
    }
}
export default addTodo;