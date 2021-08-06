import React from 'react'
import InProgressTask from '../TaskBar/InProgressTask';

const InProgress = ({TaskList, DeleteTask, FinishTask}) => {
    
    const inProgressTasks = TaskList.filter(task=>{
        return task.state === "In Progress";
    });


    return (
        <div>
            <h2>In Progress Tasks</h2>
            
            {inProgressTasks.map(task => (
                <InProgressTask Task={task} DeleteTask={DeleteTask} FinishTask={FinishTask}/>
            ))}
        </div>
    )
}

export default InProgress;