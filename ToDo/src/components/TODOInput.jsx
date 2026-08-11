import React from 'react'
import { useState } from 'react'

const TODOInput = ({addTasks,setTasks}) => {
const [input, setInput] = useState("");

const handleAdd = async () => {
  const res = await fetch("http://localhost:8000/api/todos/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: input, deadline: new Date() }),
  });

  const data = await res.json();

  setTasks((prev) => [...prev, data]);
  setInput("");
};

  return (
    <div className="flex gap-4">
      <input className="border border-gray-500 p-2"
        placeholder="Enter your todo task" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button 
      className="bg-amber-300 px-4 py-2 text-white hover:bg-amber-700 rounded-md cursor-pointer"
      onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TODOInput
