function rot13(str) {
  let resultado = "";
  const COMECO = 65;
  const FIM = 90;
  const TAMANHO_ALFABETO = 26;
  const SHIFT = 13;

  for(let i = 0; i < str.length; i++) {
    let char = str[i];
    let code = str.charCodeAt(i);
    if(code >= COMECO && code <= FIM) {
       let decodedIndex = (code - COMECO + SHIFT) % TAMANHO_ALFABETO;
      let newCode = decodedIndex + COMECO;
      resultado += String.fromCharCode(newCode);
    } else {
      resultado += char;
    }
  }
  return resultado;
}