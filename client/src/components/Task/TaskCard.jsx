import {useMutation} from '@apollo/client'
import { DELETE_TASK } from '../../graphql/task'
import {BsTrash} from 'react-icons/bs'

const TaskCard = ({ task }) => {
  const {_id} = task;
  const [deleteTask] = useMutation(DELETE_TASK, {
    refetchQueries: ["getProject"]
  })

  return (
    <div className='bg-zinc-900 px-4 py-2 mb-2 flex justify-between'>
      <h1>{task.title}</h1>
      <button
        className='bg-red-800 px-2 py-2 rounded-lg'
        onClick={() => {
          deleteTask({
            variables:{
              id: _id
            } 
          })
        }}
      >
        <BsTrash/>
      </button>
    </div>
  )
}

export default TaskCard