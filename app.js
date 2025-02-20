function calcular() {
  let massa = parseFloat(document.querySelector("#massa").value) || 0;
  let altura = parseFloat(document.querySelector("#altura").value) || 0;

  let resultado = massa / altura ** 2;

  if (resultado <= 18.5) {
    document.querySelector("#tipo").textContent =
      `Seu imc é ${resultado}. Seu tipo é baixo peso em relação à sua altura`;
  } else if (resultado > 18.5 && resultado < 24.99) {
    document.querySelector("#tipo").textContent =
      `Seu imc é ${resultado}. Seu tipo é normal em relação à sua altura`;
  } else if (resultado >= 24.99 && resultado < 29.99) {
    document.querySelector("#tipo").textContent =
      `Seu imc é ${resultado}. Seu tipo é sobrepeso em relação à sua altura`;
  } else { resultado > 30
    document.querySelector("#tipo").textContent =
      `Seu imc é ${resultado}. Seu tipo é obeso em relação à sua altura`;
  }
}
function reiniciar() {
  document.querySelector("#massa").value = "";
  document.querySelector("#altura").value = "";
  document.querySelector("#tipo").textContent = "";
}
