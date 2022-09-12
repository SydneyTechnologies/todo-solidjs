import {mergeProps, Show} from "solid-js";
import './general.css';
import { toggleTodo, todo} from "./store";

export function TodoItem(props){
    const property = mergeProps({title:'default', description:'default', id:""}, props);
    return(
        <div class={"parent"}>
            <h3 class={'todo'}>{property.title}</h3>
            <div class={"container"}>
                <div class={"items"}>
                    {property.description}
                </div>
                <Show when={todo.at(property.id).completed === false}>
                    <button class="check-box" onClick={(e)=>toggleTodo(property.id)}>
                    <span>
                        <i class="fa fa-check icon" style="color: #682EE4;"></i>
                    </span>
                    </button>
                </Show>
                
            </div>

        </div>
    );
}
    

export default TodoItem;