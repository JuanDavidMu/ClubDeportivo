# Club Deportivo

Este proyecto es una aplicación web diseñada para la gestión de afiliados, eventos y disciplinas deportivas de un club.

## Tecnologías Utilizadas

- **Backend**: Java (Jakarta Servlet API 5.0)
- **Base de Datos**: MongoDB (Driver 3.12.14)
- **Frontend**: HTML5, Bootstrap 5.3.3, JavaScript (Vanilla)
- **Gestión de dependencias**: Maven

## Estructura del Proyecto

El proyecto sigue la estructura estándar de Maven para aplicaciones web:

- `src/main/java`: Contiene el código fuente Java.
    - `co.edu.uptc.DeportiveClub`: Lógica de los Servlets (e.g., `HelloServlet`).
    - `co.edu.uptc.database`: Conexión y manejo de la base de datos MongoDB (`DataBase.java`).
- `src/main/webapp`: Contiene los archivos estáticos y la vista.
    - `index.html`: Interfaz principal de usuario.
    - `js/scripts.js`: Lógica del cliente para comunicar con el backend.

## Configuración y Ejecución

1. **Requisitos**:
   - Java Development Kit (JDK) 1.8 o superior.
   - Apache Maven.
   - Un servidor de aplicaciones compatible con Servlets (como Apache Tomcat).

2. **Base de Datos**:
   - La aplicación se conecta a una instancia de MongoDB Atlas.
   - **Nota**: La URI de conexión se encuentra actualmente hardcodeada en `src/main/java/co/edu/uptc/database/DataBase.java`. Se recomienda configurar esto mediante variables de entorno para mayor seguridad.

3. **Construcción**:
   ```bash
   mvn clean package
   ```
   Esto generará un archivo `.war` en el directorio `target`.

4. **Despliegue**:
   - Despliegue el archivo WAR generado en su servidor de aplicaciones (Tomcat).
   - Acceda a la aplicación en `http://localhost:8080/DeportiveClub` (el puerto y contexto pueden variar según su configuración).

## Funcionalidades (En Desarrollo)

- Registro y modificación de afiliados.
- Listado de eventos y disciplinas.
- Integración visual con Bootstrap para una interfaz responsiva.
