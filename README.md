# 🔐 Pattern Analyzer Pro PWA (v5.0)

**Pattern Analyzer Pro** es una solución web de alto rendimiento diseñada para la generación, análisis y gestión de trayectorias táctiles en cuadrículas de 3x3 (patrones de desbloqueo Android). Esta herramienta ha sido optimizada para su uso en entornos técnicos de reparación de smartphones y auditoría de seguridad.

## 🚀 Características Técnicas
* **Motor de Algoritmo Recursivo**: Generación de trayectorias basadas en lógica de grafos, evitando nodos ya visitados y saltos de nodo inválidos.
* **Arquitectura PWA (Progressive Web App)**: Capacidad de instalación nativa en Android/iOS y funcionamiento **Totalmente Offline** mediante Service Workers.
* **Interfaz Ergonómica (Eye-Care)**: Paleta de colores diseñada para reducir la fatiga visual en jornadas de trabajo prolongadas (Dark Mode Pro).
* **Gestión de Datos Portable**: Sistema de persistencia en `localStorage` con funciones integradas de exportación e importación en formato `.txt`.
* **Cálculo de Peso Logístico**: Algoritmo propio que evalúa la dificultad de ejecución de cada patrón basado en la distancia geométrica y cambios de dirección (giros).

## 🛠️ Pilares del Software

El proyecto se sustenta en tres archivos fundamentales:
1.  **`index.html`**: Contiene la estructura DOM, el motor de renderizado en `Canvas HTML5` y la lógica del algoritmo de búsqueda.
2.  **`manifest.json`**: Define la identidad de la aplicación, colores de tema y configuración de visualización `standalone`.
3.  **`sw.js`**: Gestiona el ciclo de vida de la aplicación, permitiendo la carga instantánea y la persistencia de recursos sin conexión a red.

## 🧠 Lógica del Algoritmo

El sistema utiliza una búsqueda recursiva que respeta las reglas físicas de los patrones de Android:
* **Validación de Saltos**: El diccionario `skips` impide conexiones directas entre nodos no adyacentes a menos que el nodo intermedio ya haya sido activado (ej. Conectar 1 con 3 requiere haber pasado por 2).
* **Evaluación de Dificultad**:
    $$Score = \sum (d^2) + \text{Penalización por Giro}$$
    Donde $d$ es la distancia entre coordenadas $(x, y)$ de los nodos consecutivos.

## 📥 Instalación

1.  Acceda a la URL de GitHub Pages desde **Google Chrome** en su dispositivo Android.
2.  Espere a que aparezca el banner superior **"INSTALAR PATTERN PRO"**.
3.  Una vez instalada, podrá encontrar la herramienta en su cajón de aplicaciones como una app nativa, funcionando sin necesidad de internet.

## 📋 Copias de Seguridad
Para migrar sus patrones marcados como "Usados" a otro dispositivo:
1.  Presione **Exportar** en el menú inferior para descargar el archivo de respaldo.
2.  En el nuevo dispositivo, presione **Importar** y seleccione el archivo generado.

---

### Notas de Versión
* **v5.0**: Implementación de contador de patrones, exportación de datos y optimización de rendimiento en el renderizado de Canvas.
