/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import TaskContext from "../../context/taskContext";
import Task from "./Task";

function Tasks() {
  const taskContext = useContext(TaskContext);

  const { tasks } = taskContext;


  return (
    <div className="mt-24">
      {/* TODO - @ USED TO SORT FROM A-Z AND VICE-VERSA */}
      <button>TASKS</button>

      {/* @ MAPS THROUGH THE OBJECT AND RENDERS A NEW TASK  */}
      {tasks.map((task) => (
        <Task key={task.task_id} task={task} />
      ))}
    </div>
  );
}

export default Tasks;
