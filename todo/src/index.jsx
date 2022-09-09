/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import ShowTodo from './showTodo';

render(() => <ShowTodo />, document.getElementById('root'));
