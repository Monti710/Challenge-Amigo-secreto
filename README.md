# Challenge Amigo Secreto 🎁

Un proyecto web interactivo para organizar sorteos de amigo secreto de manera fácil y divertida.

## 🌐 Demo en Vivo

Puedes probar la aplicación aquí: [https://monti710.github.io/Challenge-Amigo-secreto/](https://monti710.github.io/Challenge-Amigo-secreto/)

## 📋 Descripción

Este proyecto es una aplicación web que permite a los usuarios agregar nombres de amigos y realizar un sorteo aleatorio para determinar quién será el "amigo secreto". La aplicación está desarrollada con HTML, CSS y JavaScript vanilla, enfocándose en fortalecer las habilidades de lógica de programación.

## ✨ Características

- **Agregar amigos**: Permite agregar nombres a una lista de participantes
- **Validación de entrada**: Verifica que no se ingresen nombres vacíos
- **Lista dinámica**: Muestra en tiempo real todos los amigos agregados
- **Sorteo aleatorio**: Selecciona de forma aleatoria un amigo secreto
- **Interfaz limpia**: Diseño simple e intuitivo
- **Limpieza automática**: Resetea la lista después del sorteo

## 🚀 Funcionalidades

### 1. Agregar Amigo
- Captura el nombre ingresado por el usuario
- Valida que el campo no esté vacío
- Agrega el nombre al array de amigos
- Limpia el campo de entrada
- Actualiza la lista visual

### 2. Mostrar Lista de Amigos
- Recorre el array de amigos
- Crea elementos `<li>` dinámicamente
- Evita duplicados limpiando la lista antes de actualizar
- Muestra todos los participantes agregados

### 3. Sortear Amigo Secreto
- Valida que haya al menos un amigo en la lista
- Genera un índice aleatorio usando `Math.random()`
- Selecciona y muestra el amigo sorteado
- Limpia la lista y resetea el array después del sorteo

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura de la página
- **CSS3**: Estilos y diseño responsivo
- **JavaScript ES6**: Lógica de programación y manipulación del DOM

## 📁 Estructura del Proyecto

```
Challenge-Amigo-secreto/
│
├── index.html          # Página principal
├── style.css           # Estilos CSS
├── script.js           # Lógica JavaScript
└── README.md           # Documentación
```

## 🎯 Objetivos de Aprendizaje

Este proyecto fue desarrollado para fortalecer habilidades en:

- Manipulación del DOM con JavaScript
- Validación de formularios
- Uso de arrays y métodos como `push()`
- Generación de números aleatorios
- Creación de elementos HTML dinámicos
- Estructuras de control (bucles for, condicionales)
- Manejo de eventos del usuario

## 💡 Cómo Usar

1. **Acceder a la aplicación**: Visita el [enlace de la demo](https://monti710.github.io/Challenge-Amigo-secreto/)

2. **Agregar participantes**:
   - Escribe el nombre de un amigo en el campo de texto
   - Haz clic en "Adicionar" o presiona Enter
   - Repite el proceso para agregar más amigos

3. **Realizar el sorteo**:
   - Una vez que tengas al menos un amigo en la lista
   - Haz clic en "Sortear amigo"
   - ¡Descubre quién es tu amigo secreto!

## 🔧 Instalación Local

Si deseas ejecutar el proyecto localmente:

```bash
# Clonar el repositorio
git clone https://github.com/monti710/Challenge-Amigo-secreto.git

# Navegar al directorio
cd Challenge-Amigo-secreto

# Abrir index.html en tu navegador favorito
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si tienes ideas para mejorar el proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Monti710**
- GitHub: [@monti710](https://github.com/monti710)
- Proyecto: [Challenge Amigo Secreto](https://github.com/monti710/Challenge-Amigo-secreto)

---

⭐ ¡Si te gustó este proyecto, no olvides darle una estrella en GitHub!
