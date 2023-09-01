var texto = "Olá, que bom ter você aqui!";
var atraso = 200;
const textoElemento = document.querySelector(".apresentacao_conteudo_titulo");


var contadorDeLetras = 0;
function escreverTexto() {
  if (contadorDeLetras < texto.length) {
    textoElemento.textContent += texto.charAt(contadorDeLetras);
    contadorDeLetras++;
    setTimeout(escreverTexto, atraso);
  }
}

escreverTexto();
