import { PORT } from './common/config.js';
import { logger } from './errors/logger.js';
import app from './app.js';

app.listen(PORT, () => {
  logger.log('info',`Application is running on http://localhost:${PORT}`);
});
