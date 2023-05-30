const textArea = document.querySelector(".text-area"); // declaracion de variables almacena lo que el usuario va estar escribiedo en el text area
const mensaje = document.querySelector(".mensaje"); //declaracion de variable donde va a mostrar texto encriptado

//llaves de encriptacion

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

// funcion copiar //
function copiarTexto() {
  // Selecciona el elemento que contiene el texto a copiar
  const textoACopiar = document.querySelector(".mensaje");

  // Copia el texto al portapapeles
  textoACopiar.select();
  document.execCommand("copy");

  // Opcional: Puedes mostrar una notificación o mensaje de éxito
  alert("¡Texto copiado al portapapeles!");
}

// funcion del boton encriptar
function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = ""; // limpia el area 
  mensaje.style.backgroundImage = "none"; //limpiar el area de la imagen 
}

// encriptando//
function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      ); // remplazo de la vocales, VERIFICACION DEL ARRAY SE COLOCA UNA FUNCION
    }
  }
  return stringEncriptada;
}

// funcion del boton desencriptar
function btnDesencriptar() {
  const textoEncriptado = desencriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
}

// funcion desencriptar //

function desencriptar(stringDesencriptado) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptado = stringDesencriptado.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptado.includes(matrizCodigo[i][1])) {
      stringDesencriptado = stringDesencriptado.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      ); // remplazo de la vocales, VERIFICACION DEL ARRAY SE COLOCA UNA FUNCION
    }
  }
  return stringDesencriptado;
}
