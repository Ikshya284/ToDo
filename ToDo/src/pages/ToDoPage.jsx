import { useEffect, useState } from "react"
import TODOInput from "../components/TODOInput"
import ToDoList from "../components/ToDoList"


function TodoPage() {

  const [tasks, setTasks] = useState([]);

  const addTasks = (text) => {
    const newTask={
      id: Date.now(),  //checks currents time and seconds
      text,
      completed: false, //by default false
    }

    setTasks([...tasks, newTask]); 
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id != id)); //filter to delete
  };

 useEffect(() => {
  console.log("Done");
}, [tasks]);

  const editTask = (id, newText) => {
    setTasks(tasks.map((t) => t.id === id?{...t,text:newText} :t)); 
  };

  return (
    <>
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div>
        
        <TODOInput addTasks ={addTasks}
        setTasks={setTasks}
        />


        <ToDoList 
        setTasks = {setTasks} 
        tasks = {tasks} 
        deleteTask={deleteTask} 
        editTask={editTask}/>

      </div>

    </div>

    
    </>
  )
}

export default TodoPage;
