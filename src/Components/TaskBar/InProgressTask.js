import React from 'react'

const InProgressTask = ({Task, DeleteTask, FinishTask}) => {
    
    return (
        <div class="taskBox">
            <p>
                {Task.text}
            </p>
            <div className="buttonContainer">
                <button onClick={()=>FinishTask(Task.id)}>
                    Complete
                </button>
                <button onClick={()=>DeleteTask(Task.id)}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default InProgressTask;