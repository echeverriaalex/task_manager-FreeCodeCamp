import React, { useState } from "react";
import '../styles/TaskList.css'
import TaskForm from "./TaskForm";
import Task from "./Task";

function TaskList(){

    const [tasks, setTasks] = useState([])

    const addTask = task =>{
        if(task.text.trim()){
            task.text = task.text.trim();
            const tasksCurrent = [task, ...tasks];
            setTasks(tasksCurrent);
        }
    };

    const deleteTask = id =>{
        const tasksCurrent = tasks.filter(task => task.id !== id);
        setTasks(tasksCurrent);
    };

    const completeTask = id =>{
        const tasksCurrent = tasks.map(task =>{
            if(task.id === id){
                console.log(id);
                
                task.completed = !task.completed;
            }
            return task;
        });
        setTasks(tasksCurrent);
    };
   
    return(
        <>
            <TaskForm onSubmit={ addTask } />
            <div className='list-container'>
                {
                    tasks.map((task)=>
                        <Task
                            key={task.id}
                            id={task.id}
                            text={task.text}
                            completed={task.completed}
                            completeTask={completeTask} 
                            deleteTask={deleteTask}
                        />
                    )
                }
            </div>
        </>
    )
}

export default TaskList;