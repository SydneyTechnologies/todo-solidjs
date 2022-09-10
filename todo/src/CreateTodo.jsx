import styles from './ShowTodo.module.css';
import addTodo from './store';
function CreateTodo(){
    let title;
    let description;
    return (
        <div class = {styles.container} >
            <label htmlFor="title">Title</label>
            <br />
            <input ref={title} class={styles.textTitle} type="text" name="title" id="" placeholder='Please enter a Todo title'/>
            <br />
            <label htmlFor="description">Description</label>
            <br />
            <textarea ref={description} class={styles.textTitle} name="description" id="" cols="30" rows="10" placeholder='Please enter your todo description'></textarea>
            <br />
            <br />
            <button class={styles.action}
            onClick={(e)=>{
                if(title.value == null || description.value == null ) return; 
                addTodo(title.value, description.value);
                }
            }>Add Todo</button>
            

        </div>
    );
}

export default CreateTodo;