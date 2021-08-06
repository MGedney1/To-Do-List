import React from 'react'

const UpcomingTask = ({Task, DeleteTask, StartTask}) => {
    
    return (
        <div className="taskBox">
            <p>
                {Task.text}
            </p>
            <div className="buttonContainer">
                <button onClick={()=>StartTask(Task.id)}>
                    Start
                </button>
                <button onClick={()=>DeleteTask(Task.id)}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default UpcomingTask;