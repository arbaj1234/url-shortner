import express from 'express';
import dotenv from 'dotenv';
import urlRoutes from './route/urlRoutes';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api', urlRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

export default app;
