import React from 'react'

const InProgressTask = ({Task, DeleteTask, FinishTask}) => {
    
    return (
        <div class="InProgressTaskBox">
            <p>
                {Task.text}
                {Task.id}
            </p>
            <button onClick={()=>FinishTask(Task.id)}>
                Complete
            </button>
            <button onClick={()=>DeleteTask(Task.id)}>
                Delete
            </button>
        </div>
    )
}

export default InProgressTask;