# 📌 Gestor de Proyectos

Este repositorio contiene la estructura del proyecto dividido en **Backend** y **Frontend**, incluyendo ramas para el trabajo colaborativo.

---

## 🚀 Estructura de Carpetas

- **Backend/** → Contiene toda la lógica del servidor, APIs y base de datos.
- **Frontend/** → Contiene la interfaz gráfica del sistema.

---

## 🌱 Ramas principales

- `produccion` → Rama principal lista para despliegue.
- `desarrollo` → Rama de desarrollo general.
    - `DevCamilo` → Subrama para desarrollos de Camilo.
    - `DevJuliana` → Subrama para desarrollos de Juliana.
- `prueba` → Rama para pruebas antes de pasar a producción.

---

## ⚙️ Instalación de dependencias

Después de clonar el proyecto, instala las dependencias necesarias en cada parte:

### 🔹 Backend
\`\`\`bash
cd backend
npm install
\`\`\`

### 🔹 Frontend
\`\`\`bash
cd frontend
npm install
\`\`\`

---

## 📢 Notas Importantes

- La carpeta **node_modules** y archivos temporales como `.cache` **NO** se suben al repositorio debido a su gran tamaño.
- Para reconstruir dependencias después de clonar el proyecto, simplemente ejecuta `npm install` en cada carpeta (Backend y Frontend).
- El archivo `.env` contiene variables sensibles y no debe compartirse públicamente.

---

## ✅ Flujo de trabajo con ramas

1. Crear una rama desde `desarrollo` antes de hacer cambios:
   \`\`\`bash
   git checkout desarrollo
   git pull origin desarrollo
   git checkout -b NombreDeTuRama
   \`\`\`
2. Hacer commits y push en tu rama.
3. Crear un **Pull Request** para fusionar cambios a `desarrollo` o `produccion` según corresponda.

---

📌 **Autor:** Equipo de Desarrollo  
📅 **Versión:** 1.0.0
