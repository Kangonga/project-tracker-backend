import express, { Express } from 'express';
import { config } from 'dotenv';

import { connectDb } from '@app/config/connectDb';

config();

const app: Express = express();
const port = process.env.PORT || 3000;

const bootstrap = async () => {
  try {
    await connectDb(process.env.MONGO_URI as string);
    app.listen(port, () => console.log(`server is listening at ${port}`));
  } catch (error) {
    console.log(`error creating database, ${error}`);
  }
};

bootstrap();
