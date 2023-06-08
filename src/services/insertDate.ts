import { Project } from '@app/interfaces/project.interface';

export async function insertDate(this: Project) {
  this.createdAt = String(new Date());
}
