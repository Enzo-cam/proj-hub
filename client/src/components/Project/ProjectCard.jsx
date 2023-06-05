import { useNavigate } from "react-router-dom";
import {RxDotFilled} from 'react-icons/rx'

const ProjectCard = ({ project }) => {
  const { name, description } = project;
  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 w-full rounded-lg shadow-lg shadow-black p-4 mb-2 hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => navigate(`/projects/${project._id}`)}
    >
      <div className="flex place-items-center">
        <RxDotFilled className="text-yellow-500" />
        <h2>{name}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
