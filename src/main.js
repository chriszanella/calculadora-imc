const form = document.querySelector("#calculeForm");

const pesoValue = document.querySelector('#peso');
const alturaValue = document.querySelector('#altura');

function calculeForm(event) {
  event.preventDefault();

  const peso = Number(pesoValue.value);
  const altura = Number(alturaValue.value) / 100;

  const resultado = peso / (altura ** 2);

  console.log('Passo a passo abaixo:');
  console.log(`Altura (${altura}) vezes Altura (${altura}) = ${altura ** 2}`);
  console.log(`Peso (${peso}) divido por (${altura ** 2}) = ${resultado}`);
  console.log('Fim');
  
  
  

  if (peso >= 15 && altura >= 1) {
    if (resultado < 18.5) {
      alert('Abaixo do Peso.');
    } else if (resultado >= 18.5 && resultado <= 24.9) {
      alert('Peso Ideal.');
  
    } else if (resultado > 24.9 && resultado <= 29.9) {
      alert('Sobrepeso');
  
    } else if (resultado > 29.9 && resultado <= 34.9) {
      alert('Obesidade grau 1.');
  
    } else if (resultado > 34.9 && resultado <= 39.9) {
      alert('Obesidade grau 2.');
  
    } else if (resultado < 159) {
      alert('Obesidade grau 3.');
  
    } else {
      alert('Digite um valor válido... Lembre, altura em cm -> 1.7m = 170cm')
    }
  } else {
    alert('Digite um peso acima de 15kg e altura maior que: 1m -> 100cm')
  }



}

form.addEventListener('submit', calculeForm);