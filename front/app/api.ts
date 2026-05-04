export async function loginAPI(email: string, password: string) {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (response.status === 401) {
    throw new Error('Credenciales inválidas');
  }

  if (!response.ok) {
    throw new Error('Hubo un error');
  }

  return response.json();
}

export async function getMovimientosAPI(usuarioId: number) {
  const response = await fetch(`/api/movimientos/${usuarioId}`);

  if (!response.ok) {
    throw new Error('Error al traer movimientos');
  }

  return response.json();
}