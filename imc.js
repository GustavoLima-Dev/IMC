function calc() {

  //pega valores inseridos, e substitui virgula por ponto
  var peso = document.getElementById('peso').value.replace(/,/g, '.');;
  var altura = document.getElementById('altura').value.replace(/,/g, '.');;

  // valida se os campos não estão vazios
  if (peso == '' || altura == '') {
    document.getElementById("message").innerHTML = 'preencha os campos';
    return false;
  }

  // calcula IMC
  var resultado = (peso / (altura * altura));
  var message = '';

  // verifica situação
  if (resultado < 17) {
    message = 'Você está muito abaixo do peso, procure manter seu peso acima de 45Kg';
  } else if (resultado >= 17 && resultado <= 18.49) {
    message = 'Você está abaixo do peso, procure manter seu peso entre 50Kg e 56Kg';
  } else if (resultado >= 18.5 && resultado <= 24.99) {
    message = 'Seu peso está normal, procure manter seu peso entre 56Kg e 67Kg ';
  } else if (resultado >= 25 && resultado <= 29.99) {
    message = 'Você está acima do peso, procure manter seu peso entre 65Kg e 75Kg';
  } else if (resultado >= 30 && resultado <= 34.99) {
    message = 'Você tem obesidade nível I, procure manter seu peso entre 73Kg e 82Kg';
  } else if (resultado >= 35 && resultado <= 39.99) {
    message = 'Você tem Obesidade nível II, procure manter seu peso entre 80Kg e 86Kg';
  } else if (resultado >= 40) {
    message = 'Você tem Obesidade nível III, procure manter seu peso entre 83Kg e 90Kg';
  }

  // mostra resultado
  resultado = resultado.toFixed(2).replace(/\./g, ',');
  document.getElementById("message").innerHTML = 'Seu IMC é : ' + resultado + '<br>' + message;
}

windows.alert("Olá mundo!");
windows.confirm("Voce está gostando da aula?");
windows.prompt("Qual é o seu nome?");