# PROMPT MAESTRO - SITIO WEB LANDING & DESCARGAS MYFIT (v1.0)

Actúa como un **Diseñador y Desarrollador Frontend Senior especializado en UI/UX moderna**. Tu objetivo es construir el sitio web informativo y de descargas para la aplicación Android **MyFit**.

---

## 1. ESTÉTICA Y DISEÑO UI/UX
- **Tema:** Dark Mode elegante alineado a la identidad visual del logo de MyFit.
- **Paleta de Colores:** 
  - Fondo Principal: Oscuro profundo `#0B132A`
  - Tarjetas y Contenedores: Azul/Verde Noche `#121E2B`
  - Color Primario / Acentos: Verde Menta / Esmeralda `#10B981` y `#34D399`
  - Texto Principal: Blanco puro `#FFFFFF` y Gris claro `#9CA3AF`
- **Tipografía:** Sans-serif moderna (Inter / Poppins).
- **Responsividad:** 100% adaptable a móviles, tablets y escritorio.

---

## 2. ESTRUCTURA DE LA PÁGINA WEB (`index.html`)

### A. Encabezado / Navbar
- Logo de MyFit + Nombre de la App.
- Menú de Navegación: *Inicio*, *Funciones*, *Versiones / APK*, *Roadmap*, *Google Play*.
- Botón CTA destacado: **"Descargar APK"**.

### B. Sección Hero (Inicio)
- **Tagline:** *"Tu entrenador y nutricionista determinista en tu bolsillo"*.
- **Subtítulo:** *"Entrenamiento guiado por principios de biomecánica real y nutrición calculada en gramos exactos (crudo/cocido). Sin suscripciones, sin IA generativa externa y 100% privado."*
- **Badges:** `Fase Beta Activa v3.0` | `100% Offline & Seguro`.
- **Botones CTA:**
  1. `Descargar APK v3.0 (Directo)`
  2. `Próximamente en Google Play Store` (con icono oficial desactivado/próximamente).

### C. Módulo de Funcionalidades Principales
1. **Divisiones de Entrenamiento Reales:** Mapeo inteligente de rutinas (*Push/Pull/Legs*, *Torso/Pierna*, *Arnold Split*) según el nivel y días del usuario.
2. **Nutrición Exacta & Maridaje:** Cálculo en gramos exactos (estado crudo vs. cocido) respaldado por la base de datos del SMAE (Secretaría de Salud).
3. **Biblioteca Biomecánica Nativa:** Más de 150 ejercicios con explicaciones de técnica y sustitución por molestias articulares.
4. **Privacidad Garantizada:** Todos los datos se almacenan de forma local en el dispositivo con Room DB.

### D. Historial de Versiones (Changelog & Descargas)
- Tabla/Lista con el historial de compilaciones:
  - **v3.0 (Versión Actual):** Motor de divisiones biomecánicas, tabla SMAE ampliada, maridaje dinámico. [Botón Descargar APK].
  - **v2.0:** Integración de UI Jetpack Compose, barra de 4 pestañas y 365 frases motivacionales.
  - **v1.0:** Estructura inicial y arquitectura Clean.

### E. Visión a Futuro y Roadmap
- **Fase 1 (Actual):** Pruebas Beta privadas y distribución directa en APK.
- **Fase 2 (En Progreso):** Auditoría de Data Safety y políticas de Google Play Store.
- **Fase 3 (Próximamente):** Publicación oficial en Google Play Store para descarga directa.

### F. Footer y Disclaimer Legal (Google Play Mandatory)
- **Aviso Médico:** *"MyFit es una herramienta informativa y de planificación basada en algoritmos fisiológicos deterministas. No sustituye el diagnóstico o seguimiento de un profesional de la salud o del deporte."*
- Enlaces de *Política de Privacidad*, *Términos de Servicio* y *Derechos Reservados*.

---

## 3. ENTREGABLES
1. Carpeta `/web` con el código fuente (`index.html`, estilos, scripts y assets).
2. Servidor local rápido para previsualización (ej. script en Node `npm start` o script en Python `python -m http.server`).