# 🧪 Taller: Sistema de Diseño Átomico en Angular

- Este proyecto fue generado utilizando [Angular CLI](https://github.com/angular/angular-cli) 20.3.14.

- El objetivo del taller es practicar la creación de un sistema de diseño átomico y librerias en Angular, mediante el uso de componentes standalone.

## 🧱 Estructura Atomic Design

La librería organiza sus componentes en tres niveles:

- **Átomos:** `IconAtom`, `BadgeAtom`, `ButtonAtom`, `ContainerAtom`, `AvatarAtom` y `SpinnerAtom`.
- **Moléculas:** `NavLinkMolecule`, `ButtonGroupMolecule`, `AlertMolecule` y `UserInfoMolecule`.
- **Organismos:** `NavbarOrganism` y `ProfileOrganism`.

Los organismos combinan moléculas y átomos para construir secciones funcionales reutilizables. `ProfileOrganism`, por ejemplo, integra `UserInfoMolecule` y `ButtonGroupMolecule`, recibe interfaces tipadas y emite la acción seleccionada.

## 📋 Requisitos Previos

Antes de iniciar, asegúrate de tener instaladas las siguientes herramientas:

- Node.js
- npm
- Angular CLI
- Git
- Visual Studio Code

Puedes verificar Angular CLI en consola con: ```ng version```

## ▶️ Iniciar el Proyecto en Modo Desarrollo

Sigue estos pasos para ejecutar el proyecto localmente:

### 1️⃣ Abrir la consola

Ubícate en la raíz del proyecto (donde se encuentra el archivo package.json).

### 2️⃣ Instalar dependencias

```npm i```

### 3️⃣ Ejecutar el proyecto

Para ejecutar el proyecto debemos generar un compilado del projects para consumirlo desde el app
y ejecutar un proyecto de prueba consumiendo la libreria ubicada en projects

```npm run build:dev``` y ```npm run start``` o ```ng serve```

### 4️⃣ Abrir en el navegador

Cuando el servidor esté en ejecución, abre un navegador y accede a: `http://localhost:4200/`

El showcase incluye ejemplos funcionales en las siguientes rutas:

- `http://localhost:4200/atoms`
- `http://localhost:4200/molecules`
- `http://localhost:4200/organisms`

Para generar la librería en `dist` y ejecutar el showcase se requieren dos terminales:

```bash
# Terminal 1
npm run build:dev

# Terminal 2
npm start
```

## 🧪 Pruebas Unitarias

El proyecto utiliza Jest para la ejecución de pruebas unitarias.

### ▶️ Ejecutar pruebas una sola vez

```npm run test```

### 🔁 Ejecutar pruebas en modo watch

Este modo vuelve a ejecutar las pruebas cada vez que se detecta un cambio en el código.

```npm run test:watch```

### 🔁 Ejecutar coverage de pruebas

Este modo permite ejecutar todas las pruebas unitarias del proyecto y generar un reporte de cobertura, el cual muestra qué porcentaje del código fuente está siendo validado por las pruebas.

```npm run test:coverage```

La cobertura esperada del proyecto es superior al 80%.

### 📘 Generar documentación con Compodoc

Este modo permite generar la documentación técnica del proyecto a partir de los comentarios JSDoc en el código fuente, facilitando la visualización de la API del Design System y sus componentes.

El comando genera un sitio estático con la documentación del proyecto, incluyendo componentes, interfaces, tipos, módulos y diagramas de dependencias.

```npm run compodoc```

La documentación se genera en la carpeta `documentation/`. Esta salida está excluida del control de versiones porque se trata de un artefacto generado.

## ✅ Validación completa

Antes de entregar cambios, ejecuta:

```bash
npm test -- --runInBand
npm run build
npx ng build Angular-Standalone-Template --configuration development
npm run compodoc
```

## ⚙️ Generación de Archivos con Angular CLI

A continuación se presentan los comandos más utilizados para generar componentes standalone.

### 🧩 Generar un componente (con carpeta propia)

```ng g c [ruta]/[nombre-componente]```

#### Ejemplo:

```ng g c atoms/button```

#### Archivos Generados

```
src/app/atoms/button/
├── button.html
├── button.scss
├── button.spec.ts
└── button.ts
```

### 📄 Generar un componente sin carpeta (--flat)

```ng g c [ruta]/[nombre-componente] --flat```

#### Ejemplo:

```ng g c atoms/button/button.atom --flat```

#### Archivos Generados

```
src/app/atoms/button/
├──button.atom.html
├──button.atom.scss
├──button.atom.spec.ts
└──button.atom.ts
```

### 🎓 Observaciones Importantes

- En este taller se utilizan componentes standalone
- Mantener una estructura clara favorece la escalabilidad y mantenibilidad
- Revisar cobertura de pruebas unitarias y documentación