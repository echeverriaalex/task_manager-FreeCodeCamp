import React, { useState } from "react";
import '../styles/TaskForm.css'
import { v4 as uuidv4 } from 'uuid';

function TaskForm(props){

    const [input, setInput] = useState('');

    const handleChange = e =>{
        setInput(e.target.value);
    }

    const handlePost = e =>{
        e.preventDefault();

        const newTask = {
            id: uuidv4(),
            text: input,
            complete: false
        }

        props.onSubmit(newTask);
    }


    return (
        <form className="task-form"
            onSubmit={handlePost}>
            <input 
                className="task-input"
                type="text"
                placeholder="Write a task"
                name="task"
                onChange={handleChange}
            />
            <button className="task-button">
                Add task
            </button>
        </form>
    );
}

export default TaskForm;