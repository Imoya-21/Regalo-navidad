const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const heartLoader = document.querySelector(".cssload-main");
const yoBtn = document.querySelector(".js-yo-btn");
const tuBtn = document.querySelector(".js-tu-btn");
const finalTrigger = document.getElementById('trigger-final');

// Botón "Tú" se mueve al pasar el mouse - VERSIÓN CORREGIDA
tuBtn.addEventListener("mouseover", () => {
  // Añadir clase para cambiar a position fixed
  tuBtn.classList.add("moving");
  
  // Dimensiones fijas del botón (según CSS)
  const buttonWidth = 90;
  const buttonHeight = 46;
  
  // Obtener dimensiones de la ventana
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  
  // Margen de seguridad
  const margin = 20;
  
  // Calcular límites seguros (asegurando que el botón COMPLETO esté visible)
  const minX = margin;
  const maxX = screenWidth - buttonWidth - margin;
  const minY = margin;
  const maxY = screenHeight - buttonHeight - margin;
  
  // Validar que hay espacio suficiente
  if (maxX <= minX || maxY <= minY) {
    // Pantalla muy pequeña - centrar
    tuBtn.style.left = `${(screenWidth - buttonWidth) / 2}px`;
    tuBtn.style.top = `${(screenHeight - buttonHeight) / 2}px`;
    return;
  }
  
  // Generar posición aleatoria dentro de los límites seguros
  const newX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
  const newY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
  
  // Aplicar la nueva posición
  tuBtn.style.left = `${newX}px`;
  tuBtn.style.top = `${newY}px`;
});

// Funcionalidad del botón "Yo"
yoBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "block";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "flex";
  }, 3000);
});

// Creamos la capa de fundido dinámicamente
const overlay = document.createElement('div');
overlay.className = 'fade-overlay';
document.body.appendChild(overlay);

finalTrigger.addEventListener('click', () => {
    // 1. Iniciar cinemática de fundido
    overlay.classList.add('fade-active');

    // 2. Esperar a que termine la animación (1.5s) y redirigir
    setTimeout(() => {
        // Asegúrate de que el nombre del archivo sea exacto
        window.location.href = "../Regalo/Regalito.html"; 
    }, 1500);

});







