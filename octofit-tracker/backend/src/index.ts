import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const port = Number(process.env.PORT ?? 8000);
const mongoUri = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit';

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', name: 'OctoFit Tracker API' });
});

app.get('/api', (_req, res) => {
  res.json({ message: 'Welcome to OctoFit Tracker backend.' });
});

mongoose
  .connect(mongoUri)
  .then(() => {
    app.listen(port, () => {
      console.log(`OctoFit Tracker backend listening on http://0.0.0.0:${port}`);
      console.log(`MongoDB connected at ${mongoUri}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });
