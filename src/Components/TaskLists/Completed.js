import React from 'react'
import CompletedTask from '../TaskBar/CompletedTask';

const Completed = ({TaskList, DeleteTask}) => {
    
    const completedTasks = TaskList.filter(task=>{
        return task.state === "Completed";
    });


    return (
        <div className="taskList">
            <h2>Completed Tasks</h2>
            
            {completedTasks.map(task => (
                <CompletedTask Task={task} DeleteTask={DeleteTask}/>
            ))}
        </div>
    )
}

export default Completed;