import styles from './ShowTodo.module.css';

function ShowTodo(){
    return (
        <div class={styles.container}>
            <div class={styles.tabHolder}>
                <button class={styles.tab}>Todos</button>
                <button class={styles.tab}>Completed</button>
            </div>

            <div >
                There are currently no todos present at this time
            </div>
        </div>
    );
}

export default ShowTodo;