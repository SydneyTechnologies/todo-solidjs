import styles from './ShowTodo.module.css';
function CreateTodo(){
    return (
        <div class = {styles.container} >
            <label htmlFor="title">Title</label>
            <br />
            <input class={styles.textTitle} type="text" name="title" id="" placeholder='Please enter a Todo title'/>
            <br />
            <label htmlFor="description">Description</label>
            <br />
            <textarea class={styles.textTitle} name="description" id="" cols="30" rows="10" placeholder='Please enter your todo description'></textarea>
            <br />
            <br />
            <button class={styles.action}>Add Todo</button>
            

        </div>
    );
}

export default CreateTodo;