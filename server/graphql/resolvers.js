import Project from "../models/Project.js";
import Task from "../models/Task.js";

export const resolvers = {
  Query: {
    hello: () => "Hola gente",
    projects: async () => await Project.find(),
    project: async (_, {_id}) => await Project.findById(_id), 
    tasks: async () => await Task.find(),
    task: async (_, {_id}) => await Task.findById(_id), 
  },

  Mutation: {
    createProject: async (_, { name, description }) => {
      const project = new Project({
        name,
        description,
      });
      const savedProject = await project.save();
      return savedProject;
    },
    createTask: async (_, { title, projectId }) => {

      const projectFound = await Project.findById(projectId)
      if(!projectFound) throw new Error('Project not found.')

      const task = new Task({
        title,
        projectId,
      });
      const savedTask = await task.save();
      return savedTask;
    },
    deleteProject: async(_, {_id})=> {
      const deletedProject = await Project.findByIdAndDelete(_id)
      if(!deletedProject) throw new Error('Project not found')

      await Task.deleteMany({projectId: deletedProject._id})

      return deletedProject
    },
    deleteTask: async(_, {_id})=> {
      const deletedTask = await Task.findByIdAndDelete(_id)
      if(!deletedTask) throw new Error('Task not found')
      return deletedTask
    },
    updateProject: async(_, args) => {
      const updatedProj = await Project.findByIdAndUpdate(args._id, args, {
        // Indicamos que si algo se actualiza, devuelva el objeto nuevo.
        new: true,
      })
      if(!updatedProj) throw new Error('Project not found.')
      return updatedProj
    },
    updateTask: async(_, args) => {
      const updateTask = await Task.findByIdAndUpdate(args._id, args, {
        // Indicamos que si algo se actualiza, devuelva el objeto nuevo.
        new: true,
      })
      if(!updatedProj) throw new Error('Task not found.')
      return updateTask;
    }
  },
  Project: {
    tasks: async (parent) => await Task.find({projectId : parent._id})
  },
  Task: {
    project: async (parent) => await Project.findById(parent.projectId)
  }
};
