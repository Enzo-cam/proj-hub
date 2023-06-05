import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../graphql/projects";
import TasksList from '../components/Task/TasksList'
import TaskForm from "../components/Task/TaskForm";
import {BiArrowBack} from 'react-icons/bi'
import { Link } from "react-router-dom";

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
      <Link to="/projects">
        <BiArrowBack className="text-2xl mb-2" />
      </Link>
      <div className="bg-zinc-900 mb-2 p-6 flex justify-between">
        <div>
          <h1 className="text-2xl">{data.project.name}</h1>
          <p>{data.project.description}</p>
        </div>
      </div>

      <button className="bg-red-700 px-3 mb-2 py-2 rounded-lg">Borrar</button>
      <TaskForm/>
      <TasksList tasks={data.project.tasks} />
    </div>
  );
};

export default ProjectDetails;
