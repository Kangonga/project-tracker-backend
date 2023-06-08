import { Schema, model } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

import { Project } from '@app/interfaces/project.interface';
import { insertDate } from '@app/services/insertDate';

const projectSchema = new Schema<Project>({
  name: { type: String, required: true, unique: true },
  createdAt: { type: String },
});

projectSchema.plugin(mongooseUniqueValidator);
projectSchema.pre('save', insertDate);

const ProjectModel = model<Project>('Project', projectSchema);

export default ProjectModel;
