import styles from './ShowTodo.module.css';
import {createSignal, createEffect, For, Show} from 'solid-js';
import {getTodos, todo} from './store';
import {TodoItem} from './todoItem';

function ShowTodo(){


    let [active, setActive] = createSignal(0);
    createEffect(()=>{
        console.log(active());
    });


    return (
        <div class={styles.container}>
            <div class={styles.tabHolder}>
                <button class={active()===0?styles.tab:styles.button} onClick={()=>setActive(0)}>Todos</button>
                <button class={active()===1?styles.tab:styles.button} onClick={()=>setActive(1)}>Completed</button>
            </div>

            <For each={getTodos(active()===1)}>{
                (todo_item)=>
                <div>
                    <TodoItem title={todo_item.title} description = {todo_item.description} id={todo_item.id}/>
                </div>
                // (todo)=><TodoItem title={todo.title} description={todo.description}/>
            } 
            </For>
            
        </div>
    );
}




export default ShowTodo;