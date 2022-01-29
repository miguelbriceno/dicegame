//Función para obtener el número random del 1-6
function luck() {
  // Obtener un número random del 1 - 6
  var randomNumber = Math.random();
  randomNumber = Math.floor(randomNumber * 6) + 1;
  return randomNumber;
}

//Función para que el dado reciba el numero random
function dice(luckyN, dice) {
  // Obtener el atributo src de la imagen a modificar
  var dice = ".img" + dice;
  var stringSrc = document.querySelector(dice).getAttribute("src");
  // Extraer la parte de la cadena sin el numero
  stringSrc = stringSrc.slice(0, (length - 5));
  // Concatenar la cadena con el numero random y el resto de la cadena
  stringSrc = stringSrc + luckyN + ".png";
  // Reemplazar el atributo src original con la cadena nueva.
  document.querySelector(dice).setAttribute("src", stringSrc);
}

//Función para jugar dados
function playDice() {
  // LLama y guarada dos numeros random
  var lucky1 = luck();
  var lucky2 = luck();
  // Se los envía a los dados
  dice(lucky1, "1");
  dice(lucky2, "2");
  // Envía mensaje de victoria al HTML de la etiqueta h1
  if (lucky1 > lucky2){
    document.querySelector("h1").innerHTML = "Gana el Player 1";
  } else if (lucky1 < lucky2) {
    document.querySelector("h1").innerHTML = "Gana el Player 2";;
  } else {
    document.querySelector("h1").innerHTML = "Parece un empate";
  }
}

// Llamada a la función del juego
playDice();
