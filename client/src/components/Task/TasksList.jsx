import TaskCard from "./TaskCard"

const TasksList = ({tasks}) => {
  return (
    <div>
        {tasks.map(task => {
            <TaskCard />
        })}
    </div>
  )
}

export default TasksList