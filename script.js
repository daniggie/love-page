// Data final
const countDownDate = new Date("October 27, 2024 15:00:00").getTime();

// Atualiza o cronômetro a cada segundo
const intervalId = setInterval(() => {
  // Obtém a data e hora atuais
  const now = Date.now();

  // Calcula a diferença em milissegundos
  const elapsedTime = now - countDownDate;

  if (elapsedTime < 0) {
    document.getElementById("countdown").textContent = "Aguardando...";
    return;
  }

  const totalSeconds = Math.floor(elapsedTime / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);

  // Calcula meses e dias restantes
  const months = Math.floor(totalDays / 30);
  const days = totalDays % 30;

  // Calcula horas, minutos e segundos restantes
  const hours = totalHours % 24;
  const minutes = totalMinutes % 60;
  const seconds = totalSeconds % 60;

  // Atualiza o conteúdo do elemento com o ID "countdown"
  document.getElementById("countdown").innerHTML = `
            <div class="d-flex gap-2 my-2 justify-content-center">
                <div>
                    Há ${months} meses 
                </div>
                <span class="text-danger">&</span>
                <div>
                    ${days} dias
                </div>
            </div>
            <div class="row my-2 justify-content-center">
                    ${hours.toString().padStart(2, "0")} : 
                    ${minutes.toString().padStart(2, "0")} : 
                    ${seconds.toString().padStart(2, "0")}
            </div>
        `;
}, 1000);
