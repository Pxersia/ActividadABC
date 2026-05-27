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
