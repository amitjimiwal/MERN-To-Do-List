import React from 'react';
import { useDispatch } from 'react-redux';
import { completeItem, deleteItem } from '../../store/todoSlice';

const TodoItem = ({ id, title, completed }) => {
	const handleComplete=(compid)=>{

	}
      const deleteWork=(delid)=>{

	}
	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' checked={completed} onClick={()=>{
						handleComplete(id)
					}}></input>
					{title}
				</span>
				{completed && <button className='btn btn-danger' onClick={()=>{
					deleteWork(id)
				}}>Delete</button>}
			</div>
		</li>
	);
};

export default TodoItem;
