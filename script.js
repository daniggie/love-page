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
          <div class="d-flex flex-wrap gap-2 my-2 justify-content-center align-items-center">
            <div class="d-flex gap-2">  
              <div class="counter d-flex flex-column">
                <span>${months.toString().padStart(2, "0")}</span> 
                <small class="fs-6">meses</small>
              </div>
              <div class="counter d-flex flex-column">
                <span>${days.toString().padStart(2, "0")}</span> 
                <small class="fs-6">dias</small>
              </div>
            </div>
            <div class="d-flex gap-2 align-items-center">
              <span class="counter">${hours.toString().padStart(2, "0")} </span>
              : 
              <span class="counter">${minutes
                .toString()
                .padStart(2, "0")}</span>
              : 
              <span class="counter">${seconds
                .toString()
                .padStart(2, "0")}</span>
            </div>
          </div>
        `;
}, 500);

const blocked = setInterval(() => {
  if (document.getElementById("imgReceptor").style.display === "none") {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const senha = urlParams.get("senha");
    if (senha === "D&M") {
      document.getElementById("imgReceptor").style.display = "block";
    }
  }
}, 1000);

const setTab = (fileName) => {
  loadHtml(fileName + ".html");
  const tabs = document.querySelectorAll(".nav-link");

  tabs.forEach((tab) => {
    tab.classList.remove("active", "bg-light", "text-dark");
    tab.classList.add("bg-dark", "text-light");
  });

  const clickedTab = Array.from(tabs).find((tab) =>
    tab.getAttribute("onclick")?.includes(fileName),
  );
  if (clickedTab) {
    clickedTab.classList.remove("bg-dark", "text-light");
    clickedTab.classList.add("active", "bg-light", "text-dark");
  } else {
    console.error("Aba correspondente não encontrada.");
  }
};

const loadHtml = (fileName) => {
  const targetElement = document.querySelector(".card-body");

  fetch("tab/" + fileName)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao carregar o arquivo: " + response.status);
      }
      return response.text();
    })
    .then((html) => {
      targetElement.innerHTML = html;
    })
    .catch((error) => {
      console.error("Erro:", error);
      targetElement.innerHTML = "<p class='text-danger fs-6'>♥ Em breve ♥</p>";
    });
};

document.addEventListener("DOMContentLoaded", () => {
  setTab("home-tab");
});
