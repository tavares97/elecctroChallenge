/* eslint-disable no-unused-vars */
//IMPORT TYPES
import {
  CREATE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  SET_COMPLETE,
  SORT_LIST,
  FILTER_LIST,
} from "./types";

const taskReducer = (state, action) => {
  switch (action.type) {
    //THE DATA DISPATCHED COMES HERE AND CHECKS THE ACTION TYPE
    case CREATE_TASK:
      console.log(action.payload);
      return {
        //COPIES STATE OBJECT
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case DELETE_TASK:
      return {
        ...state,
        //MAPS THROUGH THE TASKS ARRAY AND FILTERS OUT THE TASK WE CLICKED ON
        tasks: state.tasks.filter((task) => task.task_id !== action.payload),
      };

    case EDIT_TASK:
      return {
        ...state,
        task: action.payload,
      };

    case SET_COMPLETE:
      return {
        ...state,
        //OVERLY COMPLICATED STUFF THAT MAKES THE TASK COMPLETED EQ TO TRUE OR FALSE DEPENDING ON THE CHECKBOX CLICK ---- **COULD BE IMPROVED**
        tasks: state.tasks.map((task) =>
          action.payload === task.task_id
            ? { ...task, task_completed: !task.task_completed }
            : task
        ),
      };

    default:
      return state;
  }
};

export default taskReducer;
