import React, { useState } from 'react'

const AddTask = (props) => {

    const initialFormState = { id: null, text: '', state: 'Upcoming' }
    const [task, setTask] = useState(initialFormState)

    const handleChange = (event) => {
        const { name, value } = event.target
    
        setTask({ ...task, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!task.text) {
            return
        }   
        props.AddTask(task)
        setTask(initialFormState)
    }

    return (
        <div className="column" className="addOuter">
            <form onSubmit={handleSubmit}  className="addForm">
                <label className="addLabel">
                    <h2>Add Task</h2>
                    <input 
                        type="textarea"
                        name="text"
                        value={task.text}
                        onChange={handleChange}
                        className="addInput"
                    />
                </label>
                <input type="submit" value="Submit" className="button" id="addSubmit"/>
            </form>
        </div>
  )
}

export default AddTask;