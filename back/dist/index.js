import express from 'express';
import { Pool } from 'pg';
const app = express();
app.use(express.json());
const pool = new Pool({
    user: 'postgres',
    password: 'postgres473',
    host: 'localhost',
    port: 5433,
    database: 'granabank',
});
app.get('/api/test', (req, res) => {
    res.json({ message: 'Backend funcionando' });
});
app.post('/api/auth/login', async (req, res) => {
    console.log("prueba");
    res.header('Access-Control-Allow-Origin', '*');
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Email y password requeridos' });
    }
    try {
        const result = await pool.query('SELECT id, email FROM "Usuario" WHERE email = $1 AND password = $2', [email, password]);
        console.log(result);
        if (result.rows.length === 0) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }
        res.json({ usuario: result.rows[0] });
    }
    catch (error) {
        console.log('Error:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});
app.listen(3001, () => {
    console.log('Backend corriendo en puerto 3001');
});
//# sourceMappingURL=index.js.map