import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend funcionando' });
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email y password requeridos' });
  }

  try {
    const usuario = await prisma.usuario.findFirst({
      where: { email, password },
    });

    if (!usuario) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    res.json({ usuario: { id: usuario.id, email: usuario.email } });
  } catch (error) {
    console.log('Error:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

app.get('/api/movimientos/:usuarioId', async (req, res) => {
  const usuarioId = parseInt(req.params.usuarioId);

  try {
    const movimientos = await prisma.movimiento.findMany({
      where: { usuarioId },
      orderBy: { createdAt: 'desc' },
    });

    res.json(movimientos);
  } catch (error) {
    console.log('Error:', error);
    res.status(500).json({ error: 'Error al traer movimientos' });
  }
});

app.listen(3001, () => {
  console.log('Backend corriendo en puerto 3001');
});