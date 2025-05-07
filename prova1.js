document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formSimulado");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Simulação de correção
      alert("Respostas enviadas!");
  
      mostrarConfete();
    });
  
    function mostrarConfete() {
      const container = document.getElementById("confete-container");
  
      for (let i = 0; i < 20; i++) {
        const confete = document.createElement("div");
        confete.classList.add("confete");
        confete.style.left = `${Math.random() * 80}px`;
        confete.style.setProperty('--hue', Math.floor(Math.random() * 360));
        container.appendChild(confete);
        setTimeout(() => confete.remove(), 1000);
      }
    }
  });  