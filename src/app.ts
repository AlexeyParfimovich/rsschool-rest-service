import express from 'express';
import swaggerUI, { JsonObject } from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';

import userRouter from './resources/users/user.router.js';
import taskRouter from './resources/tasks/task.router.js';
import boardRouter from './resources/boards/board.router.js';
import errorHandler from './errors/errorsHandler.js';

const __dirname = path.resolve();;
const swaggerDocument: JsonObject = YAML.load(path.join(__dirname, './doc/api.yaml'));

const app = express();

app.use(express.urlencoded({extended: false})); // Required to process text/html data in post/put requests!

app.use(express.json());

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
app.use(errorHandler); // Implement custom handler to process http-client-errors

export default app;