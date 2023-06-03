import { Project } from '@app/interfaces/project.interface';
import { Schema, model } from 'mongoose';

const projectSchema = new Schema<Project>({
  name: { type: String, required: true },
});

const ProjectModel = model<Project>('Project', projectSchema);

export default ProjectModel;
