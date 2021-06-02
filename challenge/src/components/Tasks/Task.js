import React, { useContext } from "react";

import TaskContext from "../../context/taskContext";

const Task = (props) => {
  const taskContext = useContext(TaskContext);

  const { deleteTask, setCompleted, editTask } = taskContext;
  const { task_name, task_id } = props.task;

  const onCheckboxChange = () => {
    setCompleted(task_id);
  };

  const onDeleteClick = () => {
    deleteTask(task_id);
  };

  const onEditClick = () => {
    editTask(props.task);
  };

  return (
    <>
      <div className="border border-black h-20 rounded flex items-center mt-1">
        <div className="ml-2">
          <input
            type="checkbox"
            id="completed"
            name="completed"
            onChange={onCheckboxChange}
            checked={props.task.task_complete}
            className="items-center transform scale-150"
          />
        </div>
        <h1 className="flex-1 ml-10">{task_name}</h1>

        <div>
          <button
            className="mr-3 rounded border border-indigo-600 ml-2 px-3 py-1.5 font-bold"
            onClick={onEditClick}
          >
            Edit
          </button>
          <button
            className="mr-3 bg-indigo-600 rounded px-3 py-1.5 text-white font-bold"
            onClick={onDeleteClick}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Task;
