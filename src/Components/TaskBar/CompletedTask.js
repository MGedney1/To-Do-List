import React from 'react'

const CompletedTask = ({Task, DeleteTask}) => {
    
    return (
        <div class="taskBox">
            <p>
                {Task.text}
            </p>
            <div className="buttonContainer">
                <button onClick={()=>DeleteTask(Task.id)}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default CompletedTask;