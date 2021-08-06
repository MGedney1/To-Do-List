import React from 'react'
import UpcomingTask from '../TaskBar/UpcomingTask';

const Upcoming = ({TaskList, DeleteTask, StartTask}) => {
    
    const upcomingTasks = TaskList.filter(task=>{
        return task.state === "Upcoming";
    });


    return (
        <div className="taskList">
            <h2>Upcoming Tasks</h2>
            
            {upcomingTasks.map((task) => (
                <UpcomingTask Task={task} DeleteTask={DeleteTask} StartTask={StartTask}/>
            ))}
        </div>
    )
}

export default Upcoming;