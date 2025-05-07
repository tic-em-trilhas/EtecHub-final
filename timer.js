// Seleciona o elemento onde o timer será exibido
const timerEl = document.getElementById('timer');

// Recupera ou define o tempo de início
let inicioProva = localStorage.getItem('inicioProva');

if (!inicioProva) {
  inicioProva = new Date().getTime();
  localStorage.setItem('inicioProva', inicioProva);
} else {
  inicioProva = parseInt(inicioProva);
}

const TEMPO_TOTAL = 3 * 60 * 60 * 1000; // 3 horas em milissegundos

function atualizarTimer() {
  const agora = new Date().getTime();
  const tempoRestante = TEMPO_TOTAL - (agora - inicioProva);

  if (tempoRestante <= 0) {
    timerEl.textContent = "Tempo esgotado!";
    clearInterval(intervalo);
    alert("O tempo da prova acabou!");
    window.location.href = "gabarito1.html"; // Redireciona automaticamente
    return;
  }

  const horas = Math.floor((tempoRestante / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((tempoRestante / (1000 * 60)) % 60);
  const segundos = Math.floor((tempoRestante / 1000) % 60);

  timerEl.textContent = `${horas.toString().padStart(2, '0')}:${minutos
    .toString()
    .padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}

const intervalo = setInterval(atualizarTimer, 1000);
atualizarTimer();

function comecarProva() {
  localStorage.removeItem("inicioProva"); // Reinicia o timer
  const horaInicio = new Date().getTime();
  localStorage.setItem("inicioProva", horaInicio);
  window.location.href = "prova1.html";
}
