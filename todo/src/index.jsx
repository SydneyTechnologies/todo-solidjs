/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import ShowTodo from './ShowTodo';

render(() => <ShowTodo />, document.getElementById('root'));
