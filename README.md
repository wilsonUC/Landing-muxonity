# Muxonity Landing (React + Vite)

Misma landing que `landing-muxonity/` (HTML), migrada a **React + TypeScript + Vite** para trabajar con `npm run dev` y `npm run build`.

## Estructura

```
muxonity-landing/
├── public/
│   └── assets/
│       ├── images/     # capturas
│       └── video/
│           └── demo-muxonity.mp4   # demo local (reemplazar si actualizas)
├── src/
│   ├── components/     # secciones de la pagina
│   ├── styles/
│   │   └── main.css    # estilos (copia del sitio estatico)
│   ├── App.tsx
│   └── main.tsx
├── index.html
└── package.json
```

La demo usa un **video local** (`public/assets/video/demo-muxonity.mp4`). Si cambias el archivo, conserva el nombre o actualiza `DemoSection.tsx`.

## Comandos

```bash
cd muxonity-landing
npm install
npm run dev
```

Abre la URL que muestra Vite (normalmente `http://localhost:5173`).

Build estatico para subir a VPS / Dokploy:

```bash
npm run build
npm run preview   # opcional: probar la carpeta dist/
```

La salida queda en **`dist/`** (sirvela con Nginx o el contenedor que uses).

## Sincronizar imagenes desde la landing HTML

Si actualizas capturas en `landing-muxonity/assets/images`:

```powershell
robocopy "..\landing-muxonity\assets\images" ".\public\assets\images" /E
```
