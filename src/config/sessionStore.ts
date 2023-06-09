import { default as connectMongoDBSession } from 'connect-mongodb-session';
import { config } from 'dotenv';
import session from 'express-session';
config();

const MongoDBStore = connectMongoDBSession(session);

export const sessionStore = new MongoDBStore({
  collection: 'sessions',
  uri: process.env.MONGO_URI as string,
  databaseName: 'project_tracker',
});
