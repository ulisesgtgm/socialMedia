// Copia el enlace al portapapeles al hacer clic en un botón de compartir.
const shareButtons = document.querySelectorAll('.tile__share-button');

async function copyText(event) {
  // Evita que el clic navegue al sitio.
  event.preventDefault();

  const link = this.getAttribute('link');

  try {
    await navigator.clipboard.writeText(link);
    alert('Copied the text: ' + link);
  } catch (err) {
    console.error('Error al copiar el enlace:', err);
  }
}

shareButtons.forEach((button) => {
  button.addEventListener('click', copyText);
});
