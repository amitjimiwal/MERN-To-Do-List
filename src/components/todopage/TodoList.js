import React from 'react';
import TodoItem from './TodoItem';
 
const TodoList = () => {
	return (
		<ul className='list-group'>
			{/* {todolist.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))} */}
		</ul>
	);
};

export default TodoList;
