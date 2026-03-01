import { useState } from 'react'
import TasksList from './TasksList'
import TasksCont from './TasksCont'
import AddTask from './AddTask'

function TaskManager() {
    const [tasks, setTasks] = useState([]);

    function addNewTask(taskObj) {
        setTasks([...tasks, taskObj]);
    }

    function deleteTask(taskObj) {
        console.log(tasks);
        let task = tasks.filter(t => t == taskObj);
        setTasks([...task]);
    }
  return (
    <div>
        <h1 className='text-4xl text-blue-400'>Task Manager</h1>
        <div className='flex justify-around'>
            <AddTask addNewTask={addNewTask} deleteTask={deleteTask}/>
            <TasksList tasks={tasks}/>
            <TasksCont tasks={tasks}/>
        </div>
    </div>
  )
}

export default TaskManager
