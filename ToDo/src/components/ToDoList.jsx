import React, { useEffect } from 'react'

const ToDoList = ({tasks, setTasks, deleteTask, editTask}) => {

const handleEdit = async (task) => {
        const newText = prompt("Edit your task", task.text);
        if (!newText || newText.trim() === "") return;


    const res = await fetch(`http://localhost:8000/api/todos/update/${task.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({title: newText}),

        });
        const updatedTask = await res.json();
        setTasks((prev) =>prev.map((t) => (t.id === task.id ? updatedTask : t)));
    };

    const handleDelete = async (id) => {

      try{
        const res = await fetch(`http://localhost:8000/api/todos/delete/${id}`, {
          method: "DELETE",
          "Content-Type": "application/json",

        });
        setTasks((prev) => prev.filter((t) => t.id !== id));
      }
      catch (error) {
        console.error(err);
      }
       
    };

    useEffect(() => {

      fetch("http://localhost:8000/api/todos")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error(err));

    }, []);

  return (
    <div className="mt-6">
      <ul>
       {tasks.map((t) =>(
        <li className="flex gap-4 px-4 py-3 justify-between items-center shadow-md rounded-lg" key={t.id}>
            <span>{t.title}</span>

          <div className="flex gap-4">

            <button 
            className= "bg-amber-700 rounded-md px-4 py-2 text-white  hover:bg-amber-300 cursor-pointer flex-1"
            onClick={() => handleEdit(t)}>Edit</button>

            <button 
            className="flex-1 bg-amber-700 rounded-md px-4 py-2 text-whiterounded-md  hover:bg-amber-300 cursor-pointer"
            onClick={() => handleDelete(t.id)}>Delete</button>

          </div>

        </li>
       ))}
      </ul>
    </div>
  )
}

export default ToDoList
