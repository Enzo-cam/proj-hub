import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PROJECT, GET_PROJECTS } from "../../graphql/projects";

const ProjectForm = () => {
  const [project, setProject] = useState({
    name: "",
    description: "",
  });
  const [createProject, {loading, error}] = useMutation(CREATE_PROJECT, {
    refetchQueries: [
        {
            query: GET_PROJECTS
        }, 
        "GetProjects"
    ]
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
    <form onSubmit={handleSubmit}>
        {error && <p>Ha sucedido un error {error.message}</p>}
      <input type="text" name="name" placeholder="Nombre del proyecto" onChange={handleChange} />
      <textarea
        name="description"
        rows="3"
        placeholder="Descripcion del proyecto...."
        onChange={handleChange}
      ></textarea>
        <button
            disabled={!project.name || !project.description || loading}
        >
            Guardar
        </button>
    </form>
  );
};

export default ProjectForm;
