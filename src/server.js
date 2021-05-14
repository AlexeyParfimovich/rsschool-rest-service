const { PORT } = require('./common/config');
const app = require('./app');

app.listen(PORT, () => {
  console.log(`Application is running on http://localhost:${PORT}`)
});
