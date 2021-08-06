import React from 'react'

const UpcomingTask = ({Task, DeleteTask, StartTask}) => {
    
    return (
        <div class="UpcomingTaskBox">
            <p>
                {Task.text}
                {Task.id}
            </p>
            <button onClick={()=>StartTask(Task.id)}>
                Start
            </button>
            <button onClick={()=>DeleteTask(Task.id)}>
                Delete
            </button>
        </div>
    )
}

export default UpcomingTask;