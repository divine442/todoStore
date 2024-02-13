import React from 'react';


import { useSelector } from 'react-redux';
import ToDoItem from './todoitems';

//useSelector hook
const TodoListView = () => {
	const todos = useSelector((state) => state.todos);

	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<ToDoItem id={todo.id} title={todo.title} completed={todo.completed}/>
			))}
		</ul>
	);
};

export default TodoListView;