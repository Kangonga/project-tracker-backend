import express, { Express, Request, Response, json } from 'express';
import { config } from 'dotenv';
import session from 'express-session';

import { connectDb } from '@app/config/connectDb';
import bugRoutes from '@app/routes/bugs.routes';
import userRoutes from '@app/routes/user.routes';
import kanbanRoutes from '@app/routes/kanban.routes';
import projectRoutes from '@app/routes/project.routes';
import commentRoutes from '@app/routes/comments.routes';
import authRoutes from '@app/routes/auth.routes';
import { sessionStore } from '@app/config/sessionStore';

config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(json());
app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
    store: sessionStore,
  })
);
app.use('/auth', authRoutes);
app.use('/bugs', bugRoutes);
app.use('/comments', commentRoutes);
app.use('/users', userRoutes);
app.use('/kanban', kanbanRoutes);
app.use('/project', projectRoutes);

app.use('*', (req: Request, res: Response) => res.send({ msg: 'route not found' }));

const bootstrap = async () => {
  try {
    await connectDb(process.env.MONGO_URI as string);
    app.listen(port, () => console.log(`server is listening at ${port}`));
  } catch (error) {
    console.log(`error creating database, ${error}`);
  }
};

bootstrap();
