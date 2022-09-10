/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import ShowTodo from './ShowTodo';
import CreateTodo from './CreateTodo';


function TodoApplication(){
    return (
        <>
            <ShowTodo/>
            <CreateTodo/>
        </>
    );
}

render(() => <TodoApplication />, document.getElementById('root'));
