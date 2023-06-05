import React from 'react'

const TaskCard = ({ task }) => {

  return (
    <div>
      <h1>{task.title}</h1>
      <button>Eliminar</button>
    </div>
  )
}

export default TaskCard