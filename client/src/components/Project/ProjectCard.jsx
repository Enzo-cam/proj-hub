import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { name, description } = project;
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/projects/${project._id}`)}>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
