import React, { useContext, useEffect, useState } from 'react';

import TaskContext from '../../context/tasksContext/taskContext';

function Home() {
	const taskContext = useContext(TaskContext);

	//ADDS STATE TO THE NEW_TASK INPUT
	const [taskState, setTaskState] = useState({
		task_name: '',
	});

	const { createTask, editTask, task } = taskContext;

	useEffect(() => {
		if (task !== null) {
			setTaskState(task);
		} else {
			setTaskState({ task_name: '' });
		}
	}, [task]);

	const onInputChange = e => {
		setTaskState({ ...task, task_name: e.target.value });
	};

	const onCreateClick = e => {
		e.preventDefault();
		!taskState.task_name
			? alert('Field cannot be empty')
			: createTask(taskState);

		setTaskState({ task_name: '' });
	};

	const onEditClick = e => {
		e.preventDefault();
		!taskState.task_name ? alert('Field cannot be empty') : editTask(taskState);

		setTaskState({ task_name: '' });
	};

	return (
		<form>
			<div className='flex justify-center items-center mt-16'>
				<input
					type='text'
					placeholder='Create new task...'
					value={taskState.task_name}
					onChange={onInputChange}
					className='border border-black rounded w-3/4 p-1'
				/>
				{task ? (
					<input
						type='submit'
						value='Edit'
						onClick={onEditClick}
						className='bg-indigo-600 rounded ml-2 px-3 py-1.5 text-white font-bold'
					/>
				) : (
					<input
						type='submit'
						value='Create'
						onClick={onCreateClick}
						className='bg-indigo-600 rounded ml-2 px-3 py-1.5 text-white font-bold'
					/>
				)}
			</div>
		</form>
	);
}

export default Home;
