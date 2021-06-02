import React, { useEffect, useReducer } from "react";

import { v4 as uuidv4 } from "uuid";

//CONTEXT
import TaskContext from "./taskContext";
import taskReducer from "./taskReducer";

//IMPORT TYPES
import {
  CREATE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  SET_COMPLETE,
  SORT_LIST,
  FILTER_LIST,
} from "./types";

const TaskState = (props) => {
  //GETS THE ARRAY FROM LOCAL STORAGE
  const localData = localStorage.getItem("tasks");
  //SETS INITIAL STATE FOR THE APP
  const initialState = {
    tasks: localData ? JSON.parse(localData) : [], //RETURNS THE LOCAL STORAGE VALUES IF THERE ARE ANY.
    task: {
      task_id: "",
      task_name: "",
      task_completed: false,
    },
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  // @USED TO SAVE TO LOCAL STORAGE EVERY TIME THE 'tasks' STATE UPDATES 
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }, [state.tasks]);

  //CREATE NEW TASK
  // @RECEIVES A TASK OBJECT
  // @SAVES IT IN THE STATE
  const createTask = (task) => {
    task.task_id = uuidv4();
    task.task_completed = false;

    dispatch({ type: CREATE_TASK, payload: task });
  };

  //DELETES TASK
  // @RECEIVES ID
  // @REMOVES IT FROM TASKS ARRAY
  const deleteTask = (id) => {
    dispatch({ type: DELETE_TASK, payload: id });
  };

  //EDITS TASKS
  // @RECEIVES ID
  // @ADDS TASK TO TASK STATE
  const editTask = (task) => {
    dispatch({ type: EDIT_TASK, payload: task });
  };

  //MARKS TASK AS COMPLETE
  // @SETS COMPLETED STATE TO TRUE
  const setCompleted = (id) => {
    dispatch({ type: SET_COMPLETE, payload: id });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        task: state.task,
        complete: state.complete,
        createTask,
        deleteTask,
        setCompleted,
        editTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
