/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from 'react';
import TaskContext from '../../context/tasksContext/taskContext';
import Task from './Task';

function Tasks() {
	const taskContext = useContext(TaskContext);

	const { tasks, sortTasks, filterTasks } = taskContext;

	const [count, setCount] = useState(1);

	const onSortClick = () => {
		//COUNTS NUMBER OF CLICKS FOR SORTING REASONS
		// 1 = A-Z || 2 = Z-A || 3 = CREATION DATE
		count === 3 ? setCount(1) : setCount(count + 1);

		sortTasks(count, tasks);
	};

	const onFilterClick = () => {
		filterTasks(tasks);
	};

	return (
		<div className='mt-24'>
			{/* @ USED TO SORT FROM A-Z AND VICE-VERSA */}
			<button onClick={onSortClick}>TASKS</button>

			{/* @ MAPS THROUGH THE OBJECT AND RENDERS A NEW TASK  */}
			{tasks.map(task => (
				<Task key={task.task_id} task={task} />
			))}

			{/* @ ONLY SHOWS BUTTON IF THERE ARE TASKS IN ARRAY */}
			{tasks.length !== 0 && (
				<button className='mt-5' onClick={onFilterClick}>
					Hide Completed
				</button>
			)}
		</div>
	);
}

export default Tasks;
