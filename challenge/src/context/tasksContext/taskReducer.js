//IMPORT TYPES
import {
	CREATE_TASK,
	DELETE_TASK,
	EDIT_TASK,
	SET_COMPLETE,
	SORT_LIST,
	FILTER_LIST,
	SET_TASK,
} from '../types';

const taskReducer = (state, action) => {
	switch (action.type) {
		//THE DATA DISPATCHED COMES HERE AND CHECKS THE ACTION TYPE
		case CREATE_TASK:
			return {
				//COPIES STATE OBJECT
				...state,
				tasks: [...state.tasks, action.payload],
			};

		case DELETE_TASK:
			return {
				...state,
				//MAPS THROUGH THE TASKS ARRAY AND FILTERS OUT THE TASK WE CLICKED ON
				tasks: state.tasks.filter(task => task.task_id !== action.payload),
			};

		case EDIT_TASK:
			console.log(action.payload);
			return {
				...state,
				//MAPS THROUGH THE TASKS ARRAY AND IF THE IDS MATCH MAKE CHANGES ELSE LEAVE THE OLD ONE
				tasks: state.tasks.map(task =>
					task.task_id === action.payload.task_id ? action.payload : task
				),
				task: null,
			};

		case SET_TASK:
			return {
				...state,
				//FILLS THE TASK STATE
				task: action.payload,
			};

		case SET_COMPLETE:
			return {
				...state,
				//OVERLY COMPLICATED STUFF THAT MAKES THE TASK COMPLETED EQ TO TRUE OR FALSE DEPENDING ON THE CHECKBOX CLICK ---- **COULD BE IMPROVED**
				tasks: state.tasks.map(task =>
					action.payload === task.task_id
						? { ...task, task_completed: !task.task_completed }
						: task
				),
			};

		case SORT_LIST:
			return {
				...state,
				tasks: action.payload,
			};

		case FILTER_LIST:
			const filters = [false];
			return {
				...state,
				//FILTERS OUT THE COMPLETED TASKS
				tasks: action.payload.filter(task =>
					filters.includes(task.task_completed)
				),
			};

		default:
			return state;
	}
};

export default taskReducer;
