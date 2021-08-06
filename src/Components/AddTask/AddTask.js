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
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Task
                    <input 
                        type="text"
                        name="text"
                        value={task.text}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
  )
}

export default AddTask;