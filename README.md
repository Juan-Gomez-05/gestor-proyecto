# 📌 Gestor de Proyectos

Este repositorio contiene la estructura completa del **Gestor de Proyectos**, dividido en **Backend** y **Frontend**, con ramas configuradas para el trabajo colaborativo del equipo.

---

## 📂 **Estructura del Proyecto**

Gestor-Proyectos/
│
├── Backend/                # Lógica del servidor, APIs y base de datos
│   ├── src/                # Código fuente del backend
│   ├── package.json        # Dependencias y scripts de backend
│   └── ...                 
│
├── Frontend/               # Interfaz gráfica del sistema
│   ├── public/             # Archivos públicos
│   ├── src/                # Código fuente del frontend
│   ├── package.json        # Dependencias y scripts del frontend
│   └── ...
│
└── README.md               # Documentación del repositorio

---

## 🌱 **Ramas principales**

| **Rama**      | **Descripción** |
|---------------|----------------|
| `produccion`  | Versión estable y lista para despliegue. |
| `desarrollo`  | Rama principal para la integración de cambios. |
| `DevCamilo`   | Rama individual para desarrollos de Camilo. |
| `DevJuliana`  | Rama individual para desarrollos de Juliana. |
| `prueba`      | Rama utilizada para probar nuevas funcionalidades antes de enviarlas a producción. |

---

## ⚙️ **Instalación de dependencias**

### Backend
\`\`\`bash
cd Backend
npm install
\`\`\`

### Frontend
\`\`\`bash
cd Frontend
npm install
\`\`\`

---

## 🚀 **Ejecución del proyecto**

### Backend
\`\`\`bash
npm run start
\`\`\`
O en modo desarrollo:
\`\`\`bash
npm run dev
\`\`\`

### Frontend
\`\`\`bash
npm start
\`\`\`

---

## 🤝 **Flujo de trabajo colaborativo**

1. Clonar el repositorio:
   \`\`\`bash
   git clone https://github.com/TU-USUARIO/gestor-proyecto.git
   \`\`\`
2. Cambiar a la rama correspondiente:
   \`\`\`bash
   git checkout DevCamilo   # o DevJuliana
   \`\`\`
3. Guardar cambios:
   \`\`\`bash
   git add .
   git commit -m "Descripción del cambio"
   git push origin DevCamilo
   \`\`\`
4. Crear Pull Request hacia `desarrollo`.

---

## 🛠️ **Tecnologías utilizadas**

- Backend: Node.js, Express, MongoDB/MySQL
- Frontend: React, JavaScript, CSS, HTML
- Control de versiones: Git y GitHub
