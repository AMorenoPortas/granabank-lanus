Reemplazá todo el contenido del front/README.md con esto:
markdown# GranaBank 🔴⚫

Web app bancaria para el Club Atlético Lanús - Challenge técnico.

🔗 **Deploy:** [granabank-lanus.vercel.app](https://granabank-lanus.vercel.app)

## Credenciales de prueba

- **Email:** soygranate@clublanus.com
- **Contraseña:** GRANATE1@

## ¿Cómo correr el proyecto?

1. Cloná el repositorio:
```bash
git clone https://github.com/AMorenoPortas/granabank-lanus.git
```

2. Instalá las dependencias en la carpeta `front`:
```bash
cd front
npm install
```

3. Creá un archivo `.env` en `front/` con las variables:
DATABASE_URL=tu_url_de_supabase
DIRECT_URL=tu_direct_url_de_supabase

4. Generá el cliente de Prisma:
```bash
npx prisma generate
```

5. Corré el proyecto:
```bash
npm run dev
```

6. Abrí [http://localhost:3000](http://localhost:3000)

## Decisiones técnicas

- **Next.js 16 + TypeScript:** Framework principal con App Router. Las API routes de Next.js reemplazan un backend separado, simplificando el deploy.
- **Prisma ORM + Supabase (PostgreSQL):** Prisma para el manejo de la base de datos con tipado seguro. Supabase como proveedor de PostgreSQL gratuito y confiable.
- **Tailwind CSS:** Estilos utilitarios para seguir el diseño de Figma de forma rápida y consistente.
- **SweetAlert2:** Feedback visual claro al usuario en login y errores.
- **Vercel:** Deploy automático conectado al repositorio de GitHub.

## Estructura del proyecto
front/
├── app/
│   ├── api/
│   │   ├── auth/login/route.ts      # POST /api/auth/login
│   │   └── movimientos/[usuarioId]/ # GET /api/movimientos/:id
│   ├── components/ui/
│   │   └── MovimientosItem.tsx
│   ├── home/page.tsx
│   ├── login/page.tsx
│   ├── movimientos/page.tsx
│   └── api.ts
├── prisma/
│   └── schema.prisma

## ¿Qué mejoraría con más tiempo?

- Autenticación con JWT y sesiones persistentes
- Hasheo de contraseñas con bcrypt
- Paginación en la lista de movimientos
- Detalle de cada movimiento al hacer click
- Animaciones de transición entre pantallas
- Tests unitarios y de integración
- Manejo de errores más robusto en el frontend