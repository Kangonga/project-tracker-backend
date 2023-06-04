import { Project } from '@app/interfaces/project.interface';
import ProjectModel from '@app/models/project.model';

export const findAllProjects = async () => {
  let error = false;
  const projects = await ProjectModel.find();
  if (!projects) {
    error = true;
  }
  return { error, projects };
};

export const createOneProject = async (project: Project) => {
  const newproject = await ProjectModel.create(project);
  if (!(newproject instanceof ProjectModel)) {
    throw Error('Project was not created');
  }
  return { newproject };
};

export const findProjectById = async (id: string) => {
  const project = await ProjectModel.findOne({ _id: id });
  if (!project) {
    throw Error('Project not found');
  }
  return { project };
};

export const findProject = async (field: string, value: string) => {
  const project = await ProjectModel.findOne({ field: value });
  if (!project) {
    throw Error('Project not found');
  }
  return { project };
};

export const updateSingleProject = async (projectID: string, project: Project) => {
  const filter = { _id: projectID };
  const updatedProject = await ProjectModel.findOneAndUpdate(filter, project, {
    new: true,
    runValidators: true,
  });
  if (!updatedProject) {
    throw Error('Project not found');
  }
  return { updatedProject };
};

export const deleteSingleProject = async (projectID: string) => {
  const filter = { _id: projectID };
  const deletedProject = await ProjectModel.findOneAndDelete(filter);
  if (!deletedProject) {
    throw Error('Project not found');
  }
  return { deletedProject };
};
