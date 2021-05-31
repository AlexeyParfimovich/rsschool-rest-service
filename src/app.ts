import express from 'express';
import swaggerUI, { JsonObject } from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';

import userRouter from './resources/users/user.router.js';
import taskRouter from './resources/tasks/task.router.js';
import boardRouter from './resources/boards/board.router.js';
import { errorHandler, httpRequestLogger } from './errors/middleware.js';

const __dirname = path.resolve();;
const swaggerDocument: JsonObject = YAML.load(path.join(__dirname, './doc/api.yaml'));

const app = express();

app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.use(httpRequestLogger); // Add middleware logging http requests

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
app.use('/boards/:ownerId/tasks', taskRouter);

// process.on('unhandledRejection', (reason, promise) => {
//   console.error(`Unhandled rejection detected: ${reason.message}`);
// });

// process.on('uncaughtExceptionMonitor', (error: Error, origin) => {
//   console.error(`captured error: ${error.message}`);
// });

app.use(errorHandler); // Add middleware handling and logging unhandled errors

export default app;