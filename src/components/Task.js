import React from 'react'
import '../styles/Task.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function Task({ id, text, completed, completeTask, deleteTask }){
    return (
        <div className= { completed ? 'task-container completed' : 'task-container' }>
            <div
                className='task-text'
                onClick={() => completeTask(id)}>
                { text }
            </div>
            <div
                className='icons-container'
                onClick={() => deleteTask(id)}>
                <AiOutlineCloseCircle className='icon-task'/>
            </div>
        </div>
    )
}

export default Task