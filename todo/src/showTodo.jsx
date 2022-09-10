import styles from './ShowTodo.module.css';
import {createSignal, createEffect, For} from 'solid-js';
import todo from './store';

function ShowTodo(){


    let [active, setActive] = createSignal(0);
        // 0 means the Todos application is active
        // 1 means that the completed section is active
    createEffect(()=>{
        console.log(active());
    });


    return (
        <div class={styles.container}>
            <div class={styles.tabHolder}>
                {/* <button classList={active()=== 0? styles.tab: ""} onClick={()=>setActive(0)}>Todos</button>
                <button classList={active()=== 1? styles.tab: ""} onClick={()=>setActive(1)}>Completed</button> */}
                <button class={active()===0?styles.tab:styles.button} onClick={()=>setActive(0)}>Todos</button>
                <button class={active()===1?styles.tab:styles.button} onClick={()=>setActive(1)}>Completed</button>
            </div>

            <For each={todo()}>{
                (todo)=><div >
                {todo.title}
                </div>
            }
                
            </For>
            
        </div>
    );
}

export default ShowTodo;