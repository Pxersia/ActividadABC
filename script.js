function colorAleatorio() {
  const colores = ["green", "blue", "red"];
  return colores[Math.floor(Math.random() * colores.length)];
}

// Cambiar color de borde al hacer clic en imágenes
document.querySelectorAll(".border-image").forEach(img => {
  img.addEventListener("click", () => {
    img.style.borderColor = colorAleatorio();
  });
});

// Cambiar color de texto en h5
document.querySelectorAll("h5").forEach(h5 => {
  h5.addEventListener("click", () => {
    h5.style.color = colorAleatorio();
  });
});

// Selecciona la imagen A y el texto asociado
const imagenA = document.querySelector('.icons img:first-child');
const textoA = document.querySelector('h3.azul');

// Función que ajusta el ancho del texto al de la imagen
function ajustarTextoImagen() {
  if (imagenA && textoA) {
    textoA.style.width = imagenA.offsetWidth + 'px';
    textoA.style.textAlign = 'center'; // centra el texto
  }
}

// Ajusta al cargar la página
window.addEventListener('load', ajustarTextoImagen);

// Ajusta también si la ventana cambia de tamaño
window.addEventListener('resize', ajustarTextoImagen);
