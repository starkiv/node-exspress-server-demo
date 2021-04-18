import express from 'express';
import home from './home';
import info from './info';
import errorHandler from './errorHandler';
import logger from './logger';
import parseResponse from './parseResponse';

const app = express();
const port = 5000;

logger(app);
parseResponse(app);
app.get('/', home);
app.post('/info', info);
errorHandler(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
