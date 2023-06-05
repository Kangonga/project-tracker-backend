import { sessionStore } from '@app/config/sessionStore';

export const findAndDeleteSession = async (userId: string) => {
  const db = sessionStore.client.db('project_tracker');
  const sessions = db.collection('sessions');
  const result = await sessions.findOne({ 'session.userId': userId });
  if (!result) {
    return;
  }
  await sessions.findOneAndDelete({ 'session.userId': userId });
  return;
};
