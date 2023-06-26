import React from 'react';
import TodoItem from './TodoItem';
 
const TodoList = ({todolist}) => {
	return (
		<ul className='list-group '>
			{todolist.map((todo,index) => (
				<TodoItem id={todo._id} title={todo.title} completed={todo.completed} key={index} />
			))}
		</ul>
	);
};

export default React.memo(TodoList);
