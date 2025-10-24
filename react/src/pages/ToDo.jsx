import React, { useState } from 'react';

function ToDo() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [flag, setFlag] = useState(false);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  function addTask() {
    if (task.trim() === '') return;
    setTasks([...tasks, task.trim()]);
    setTask('');
  }

  function deleteTask(indexToDelete) {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  }

  function editTask(index) {
    setCurrentEditIndex(index);
    setEditText(tasks[index]);
    setFlag(true);
  }

  function saveTask() {
    if (currentEditIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[currentEditIndex] = editText.trim() || tasks[currentEditIndex];
      setTasks(updatedTasks);
      setFlag(false);
      setCurrentEditIndex(null);
    }
  }

  function cancelEdit() {
    setFlag(false);
    setCurrentEditIndex(null);
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">My To-Do List</h2>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        className="border border-gray-400 p-2 mr-2 rounded w-full"
      />

      <button
        onClick={addTask}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-2 w-full"
      >
        Add
      </button>

      <ul className="mt-4 list-disc pl-5 overflow-x-hidden">
        {tasks.map((t, index) => (
          <li key={index} className="mb-2 flex justify-between items-center">
            {flag && currentEditIndex === index ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="border border-gray-400 p-1 rounded w-2/3"
                />
                <div className="flex space-x-2">
                  <button onClick={saveTask} className="bg-green-600 text-white px-2 py-1 rounded text-sm">
                    Save
                  </button>
                  <button onClick={cancelEdit} className="bg-gray-500 text-white px-2 py-1 rounded text-sm">
                    Cancel
                  </button>
                </div>
              </>
             ) : (
              <>
                <span className="truncate w-2/3">{t}</span>
                <div className="flex-shrink-0 space-x-2">
                  <button
                    onClick={() => editTask(index)}
                    className="bg-yellow-400 text-white px-2 py-1 rounded text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTask(index)}
                    className="bg-red-600 text-white px-2 py-1 rounded text-sm"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
