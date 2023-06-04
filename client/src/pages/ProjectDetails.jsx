import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../graphql/projects";
import TasksList from '../components/Task/TasksList'
import TaskForm from "../components/Task/TaskForm";

const ProjectDetails = () => {
  const params = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: {
      id: params.id,
    },
    skip: !params.id,
  });

  if (loading) return <p>The project is loading</p>;

  return (
    <div>
      <h1>{data.project.name}</h1>
      <p>{data.project.description}</p>
      
      <button>Delete</button>
      <TaskForm/>
      <TasksList tasks={data.project.tasks} />
    </div>
  );
};

export default ProjectDetails;
