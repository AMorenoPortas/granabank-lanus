# GranaBank 🔴⚫

Web app bancaria para el Club Atlético Lanús - Challenge técnico.

🔗 Deploy: https://granabank-lanus.vercel.app

## Credenciales de prueba

- Email: soygranate@clublanus.com
- Contraseña: GRANATE1@

## Como correr el proyecto

1. Clonar el repositorio:
   git clone https://github.com/AMorenoPortas/granabank-lanus.git

2. Instalar dependencias:
   cd front
   npm install

3. Crear un archivo .env en front/ con las variables:
   DATABASE_URL=tu_url_de_supabase
   DIRECT_URL=tu_direct_url_de_supabase

4. Generar el cliente de Prisma:
   npx prisma generate

5. Correr el proyecto:
   npm run dev

6. Abrir http://localhost:3000

## Decisiones tecnicas

- Next.js 16 + TypeScript: App Router con API routes integradas, sin necesidad de un backend separado.
- Prisma ORM + Supabase (PostgreSQL): Base de datos relacional en la nube con tipado seguro y migraciones automaticas.
- Tailwind CSS: Estilos utilitarios para seguir el diseño de Figma fielmente.
- SweetAlert2: Feedback visual claro al usuario en login y errores.
- Vercel: Deploy automatico conectado al repositorio de GitHub.

## Estructura del proyecto

granabank/
├── front/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/login/route.ts
│   │   │   └── movimientos/[usuarioId]/route.ts
│   │   ├── components/ui/
│   │   │   └── MovimientosItem.tsx
│   │   ├── home/page.tsx
│   │   ├── login/page.tsx
│   │   ├── movimientos/page.tsx
│   │   └── api.ts
│   └── prisma/
│       └── schema.prisma

## Funcionalidades

- Login con validacion de campos
- Home con tarjeta y ultimos movimientos
- Lista de movimientos con buscador y filtros por tipo
- Estados de loading y vacio
- Navegacion entre pantallas

## Que mejoraria con mas tiempo

- Autenticacion con JWT y sesiones persistentes
- Paginacion en la lista de movimientos
- Detalle de cada movimiento al hacer click
- Animaciones de transicion entre pantallas
- Tests unitarios y de integracion
- Manejo de errores mas robusto en el frontend
