
import { PORT } from './common/config.js';
import app from './app.js';

app.listen(PORT, () => {
  console.log(`Application is running on http://localhost:${PORT}`)
});
