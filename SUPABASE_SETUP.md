# Configuración de Supabase para Korzen

## Pasos para configurar la base de datos:

### 1. Instalar dependencias
```bash
npm install @supabase/supabase-js
```

### 2. Ejecutar el schema SQL en Supabase
1. Ve a tu proyecto en Supabase: https://supabase.com/dashboard
2. Navega a **SQL Editor**
3. Copia y pega el contenido de `supabase-schema.sql`
4. Ejecuta el script

### 3. Migrar datos iniciales (Productos y Blog)
Los productos y posts del blog actuales se pueden migrar ejecutando:

1. Ve a **Table Editor** en Supabase
2. Importa los datos desde los archivos:
   - `src/data/products.js` → tabla `products`
   - `src/data/blogPosts.js` → tabla `blog_posts`

### 4. Configurar autenticación de admin
Para el sistema de admin, puedes usar:
- **Opción A**: Auth nativo de Supabase (recomendado para producción)
- **Opción B**: Tabla personalizada `admin_users` (actual implementación simple)

### 5. Variables de entorno
Las variables ya están configuradas en `.env`:
- `VITE_SUPABASE_URL`: URL de tu proyecto
- `VITE_SUPABASE_ANON_KEY`: Clave pública (ya configurada)
- `VITE_SUPABASE_SERVICE_KEY`: Clave secreta (solo para backend)

### 6. Seguridad - Row Level Security (RLS)
El schema incluye políticas de RLS:
- **Productos**: Lectura pública, escritura solo admin
- **Órdenes**: Lectura admin, creación pública
- **Blog**: Lectura pública, escritura solo admin
- **Admin users**: Solo admin

### 7. Iniciar la aplicación
```bash
npm install --legacy-peer-deps
npm start
```

## Estructura de tablas:

### products
- id, name, price, image, category, description, stock

### orders
- id, customer_info, items, total, shipping_cost, status, date

### blog_posts
- id, title, excerpt, content, image, category, date, read_time

### admin_users
- id, email, password_hash, role

## Notas importantes:
- Los datos actuales están en localStorage. Una vez conectado a Supabase, se usará la base de datos real.
- Necesitas ejecutar el schema SQL antes de usar la aplicación.
- Para producción, considera implementar autenticación con Supabase Auth.
