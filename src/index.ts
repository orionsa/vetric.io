import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import fbRoutes from './routes/fbRoutes.js';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
  
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use('/fb', fbRoutes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
