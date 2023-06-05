import TaskCard from "./TaskCard"

const TasksList = ({tasks}) => {

  return (
    <div>
      {tasks.map(task => (
        <TaskCard 
          key={task._id}
          task={task}
        />
      ))}
    </div>
  )
}

export default TasksList