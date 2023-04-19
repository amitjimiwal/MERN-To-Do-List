import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
 
const TodoList = () => {
      const todolist=useSelector(state=> state.todolist);
	return (
		<ul className='list-group'>
			{todolist.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;
