let palpites = document.querySelector(".palpites");
let ultimoResultado = document.querySelector(".ultimoResultado");
let baixoOuAlto = document.querySelector(".baixoOuAlto");

let campoPalpite = document.querySelector("#campoPalpite");
let envioPalpite = document.querySelector("#envioPalpite");

let botaoReinicio;

let numeroAleatorio = gerarNumeroRandomico();
let turno = 1;

//This function will be executed by front-end
envioPalpite.addEventListener("click", verificarPalpite);

function gerarNumeroRandomico() {
  return Math.floor(Math.random() * 100) + 1;
}

function verificarPalpite() {
  let palpiteDigitado = Number(campoPalpite.value);

  if (turno === 1) {
    palpites.textContent = "Palpites anteriores: ";
  }

  palpites.textContent += palpiteDigitado + " ";

  if (palpiteDigitado === numeroAleatorio) {
    ultimoResultado.textContent = "Parabéns!! Você acertou!!";
    ultimoResultado.style.backgroundColor = "green";
    baixoOuAlto.textContent = "";
    finalizarJogo();
  } else if (turno === 10) {
    ultimoResultado.textContent = "GAME OVER!";
    baixoOuAlto.textContent = "";
    finalizarJogo();
  } else {
    ultimoResultado.textContent = "Você errou!";
    ultimoResultado.style.backgroundColor = "red";

    if (palpiteDigitado < numeroAleatorio) {
      baixoOuAlto.textContent = "Seu palpite foi muito baixo!";
    } else if (palpiteDigitado > numeroAleatorio) {
      baixoOuAlto.textContent = "Seu palpite foi muito alto";
    }
  }

  turno++;
  palpiteDigitado = 0;
}

function finalizarJogo() {
  campoPalpite.disabled = true;
  envioPalpite.disabled = true;

  botaoReinicio = document.createElement("button");
  botaoReinicio.textContent = "Iniciar novo jogo";

  document.body.appendChild(botaoReinicio);

  botaoReinicio.addEventListener("click", reiniciarJogo);
}

function reiniciarJogo() {
  turno = 1;
  envioPalpite.disabled = false;
  campoPalpite.disabled = false;
  campoPalpite.value = "";
  campoPalpite.focus();
  palpites.textContent = "";
  ultimoResultado.textContent = "";

  botaoReinicio.parentNode.removeChild(botaoReinicio);

  numeroAleatorio = gerarNumeroRandomico();
}
