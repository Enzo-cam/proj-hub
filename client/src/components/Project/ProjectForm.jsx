import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PROJECT, GET_PROJECTS } from "../../graphql/projects";

const ProjectForm = () => {
  const [project, setProject] = useState({
    name: "",
    description: "",
  });
  
  const [createProject, {loading, error}] = useMutation(CREATE_PROJECT, {
    // Una vez ejecutado el Create, vamos a hacer un llamado a Get para actualizar la lista de los proyectos
    refetchQueries: ["getProjects"]
  })

  const handleChange = ({target: {name, value}}) => {
    setProject({
        ...project,
        [name]: value
    })
  };

  const handleSubmit = async e => {
    e.preventDefault()
    await createProject({
        variables: {
            name: project.name,
            description: project.description
        }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="w-2/5">
        {error && <p>Ha sucedido un error {error.message}</p>}
      <input type="text" name="name" placeholder="Nombre del proyecto" onChange={handleChange} 
        className="bg-zinc-800 text-white rounded-lg shadow-lg p-4 block w-full mb-3"
      />
      <textarea
        name="description"
        rows="3"
        resize="none"
        placeholder="Descripcion del proyecto...."
        onChange={handleChange}
        className="bg-zinc-800 text-white rounded-lg shadow-lg p-4 block w-full mb-3"
      ></textarea>
        <button
            disabled={!project.name || !project.description || loading}
            className="bg-yellow-400 hover:bg-yellow-600 p-2 rounded-lg font-bold text-black disabled:bg-gray-400 disabled:text-gray-300"
        >
            Crear proyecto
        </button>
    </form>
  );
};

export default ProjectForm;
