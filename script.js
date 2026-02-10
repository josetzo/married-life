const relationshipStart = new Date("2024-02-14");

const daysEl = document.getElementById("daysTogether");
const monthsEl = document.getElementById("monthsTogether");

function updateCounters() {
  const today = new Date();
  const diffMs = today - relationshipStart;
  const days = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));

  const months =
    (today.getFullYear() - relationshipStart.getFullYear()) * 12 +
    (today.getMonth() - relationshipStart.getMonth()) -
    (today.getDate() < relationshipStart.getDate() ? 1 : 0);

  daysEl.textContent = days.toLocaleString("es-CL");
  monthsEl.textContent = Math.max(0, months).toLocaleString("es-CL");
}

updateCounters();

const audio = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
let playing = false;

musicBtn.addEventListener("click", async () => {
  try {
    if (!playing) {
      await audio.play();
      playing = true;
      musicBtn.textContent = "Pausar musica";
    } else {
      audio.pause();
      playing = false;
      musicBtn.textContent = "Reproducir musica";
    }
  } catch (err) {
    alert("El navegador bloqueó la reproducción automática. Presiona nuevamente.");
  }
});
