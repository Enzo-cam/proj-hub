import {useMutation} from '@apollo/client'
import { CREATE_TASK } from "../../graphql/task"
import {useParams} from "react-router-dom"

const TaskForm = () => {
  const params = useParams()
  const [createTask] = useMutation(CREATE_TASK, {
    // Una vez ejecutado el Create, vamos a hacer un llamado a Get para actualizar la lista de los proyectos
    refetchQueries: ["getProject"]
  })

  const handleSubmit = async e =>{
    e.preventDefault()
    await createTask({
      variables: {
        title: e.target.title.value,
        projectId: params.id
      }
    })
    e.target.reset()
    e.target.title.focus()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className='bg-zinc-900 text-white w-full p-2 rounded-lg mb-2' type="text" name="title" placeholder='Añada tareas' />
      <button className='bg-sky-800 w-full rounded-lg p-2 mb-4'>Añadir tarea</button>
    </form>
  )
}

export default TaskForm