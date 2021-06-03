import React, { useContext, useState } from "react";

import TaskContext from "../../context/taskContext";

function Home() {
  const taskContext = useContext(TaskContext);

  //ADDS STATE TO THE NEW_TASK INPUT
  const [taskState, setTaskState] = useState({});

  const { createTask } = taskContext;

  const onInputChange = (e) => {
    //SETS TIMEOUT OF 500 MS TO PREVENT FLOOD OF INPUTS
    setTimeout(() => {
      setTaskState({ ...taskState, task_name: e.target.value });
    }, 500);
  };

  const onCreateTask = () => {
    createTask(taskState);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="flex justify-center items-center mt-16">
        <input
          type="text"
          placeholder="Create new task..."
          onChange={onInputChange}
          className="border border-black rounded w-3/4 p-1"
        />
        <button
          className="bg-indigo-600 rounded ml-2 px-3 py-1.5 text-white font-bold"
          onClick={onCreateTask}
          type="reset"
        >
          Create
        </button>
      </div>
    </form>
  );
}

export default Home;
