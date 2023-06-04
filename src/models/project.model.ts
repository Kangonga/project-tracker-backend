import { Schema, model } from 'mongoose';

import { Project } from '@app/interfaces/project.interface';

const projectSchema = new Schema<Project>({
  name: { type: String, required: true },
});

const ProjectModel = model<Project>('Project', projectSchema);

export default ProjectModel;
