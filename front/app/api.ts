export async function loginAPI(email: string, password: string) {
  const response = await fetch('http://localhost:3001/api/auth/login', {
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