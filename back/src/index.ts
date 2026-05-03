import express from 'express';
import { Pool } from 'pg';

const app = express();
const pool = new Pool({
  user: 'postgres',
  password: 'postgres473',
  host: 'localhost',
  port: 5433,
  database: 'granabank',
});

app.use(express.json());

app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend funcionando' });
});

app.listen(3001, () => {
  console.log('Backend corriendo en puerto 3001');
});