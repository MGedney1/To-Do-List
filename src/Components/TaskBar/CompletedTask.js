import React from 'react'

const CompletedTask = ({Task, DeleteTask}) => {
    
    return (
        <div class="CompletedTaskBox">
            <h6>
                {Task.text}
            </h6>
            <button onClick={()=>DeleteTask(Task.id)}>
                Delete
            </button>
        </div>
    )
}

export default CompletedTask;