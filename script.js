// Ajusta fecha real
const relationshipStart = new Date("2024-02-14");

const daysEl = document.getElementById("daysTogether");
const monthsEl = document.getElementById("monthsTogether");
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

function updateCounters() {
  const today = new Date();
  const diff = today - relationshipStart;
  const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));

  const months =
    (today.getFullYear() - relationshipStart.getFullYear()) * 12 +
    (today.getMonth() - relationshipStart.getMonth()) -
    (today.getDate() < relationshipStart.getDate() ? 1 : 0);

  daysEl.textContent = days.toLocaleString("es-CL");
  monthsEl.textContent = Math.max(0, months).toLocaleString("es-CL");
}
updateCounters();

// MP3 local
let isPlaying = false;
musicBtn.addEventListener("click", async () => {
  try {
    if (!isPlaying) {
      await bgMusic.play();
      isPlaying = true;
      musicBtn.textContent = "Pausar musica";
    } else {
      bgMusic.pause();
      isPlaying = false;
      musicBtn.textContent = "Reproducir musica";
    }
  } catch {
    alert("El navegador bloqueó la reproducción automática. Presiona nuevamente.");
  }
});
