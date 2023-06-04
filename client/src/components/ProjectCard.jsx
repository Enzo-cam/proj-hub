import React from 'react'

const ProjectCard = ({project}) => {
  const {name,description} = project
  return (
    <div>
        <h2>{name}</h2>
        <p>{description}</p>
    </div>
  )
}

export default ProjectCard