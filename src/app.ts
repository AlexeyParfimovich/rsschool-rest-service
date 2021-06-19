import express from 'express';
import swaggerUI, { JsonObject } from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';

import userRouter from './resources/users/user.router';
import taskRouter from './resources/tasks/task.router';
import boardRouter from './resources/boards/board.router';
import * as middleware from './errors/middleware';

// __dirname = path.resolve();;
const swaggerDocument: JsonObject = YAML.load(path.join(path.resolve(), './doc/api.yaml'));

const app = express();

app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.use(middleware.httpRequestLogger); // Add middleware logging http requests

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/boards/:boardId/tasks', taskRouter);

app.use(middleware.errorHandler); // Add middleware handling and logging unhandled errors

process.on('unhandledRejection', middleware.unhandledRejectionLogger);

process.on('uncaughtException', middleware.uncaughtExceptionLogger);

// Testing unhandled rejection catcher
// Promise.reject(new Error('Testing unhandled rejection catching'));

// Testing uncaught exception catcher
// throw Error('Testing uncaught exception catching');

export default app;