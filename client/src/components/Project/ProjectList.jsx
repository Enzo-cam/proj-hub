import { useQuery } from "@apollo/client"
import { GET_PROJECTS } from "../../graphql/projects"
import ProjectCard from "./ProjectCard"

const ProjectList = () => {
  const {loading, error, data} = useQuery(GET_PROJECTS)

    if(loading) return <p>Loading</p>
    if(error) return <p>An error ocurred, please reload.</p>

    return (
      <div className="overflow-y-auto h-72 w-full px-2">
        {
            data.projects.map(project => (
              <ProjectCard
                key={project._id}
                project={project}
              />  
            ))
        }
      </div>
    )
}

export default ProjectList