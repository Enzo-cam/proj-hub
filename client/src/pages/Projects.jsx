import ProjectForm from "../components/Project/ProjectForm"
import ProjectList from "../components/Project/ProjectList"

const Projects = () => {
    return (
        <div className="bg-zinc-900 rounded-md shadow-lg shadow-black p-2 h-4/5 w-4/5">
            <h1 className="text-2xl font-bold py-2 mb-4">Project Manager</h1>
            <div className="flex justify-between gap-x-1">
                <ProjectForm />
                <ProjectList />
            </div>
        </div>
    )
}

export default Projects