window.addEventListener("load", () => {
  const audio = document.getElementById("backgroundAudio");

  // Intentar reproducir automáticamente
  const playAudio = () => {
    audio.volume = 0.6;
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log("Audio reproduciéndose automáticamente.");
        })
        .catch((error) => {
          console.warn("El navegador bloqueó la reproducción automática.");
        });
    }
  };

  playAudio();

  // Activar con cualquier clic si fue bloqueado
  document.addEventListener("click", playAudio, { once: true });
});


