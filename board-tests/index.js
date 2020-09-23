function olaFulano() {
  const nome = prompt("Qual é o seu nome ?");

  if (!nome) {
    alert("Olá Fulano Que Não Sei o Nome :)");
  } else {
    alert("Olá " + nome + ", prazer em conhece-lo :)");
  }
}

function inverterString() {
  const str = prompt("Agora escreva uma palavra que eu vou inverter ela :P");

  //Converte para Array, inverte o Array, e converte para String novamente
  return alert(str.split("").reverse("").join(""));
}

function iniciaisEmMaisculo() {
  const str = prompt(
    "Agora escreva seu nome completo em MINISCULO que vou transformar as iniciais em maisculo pra você ;)"
  );

  //Converte a String para Array
  let strSplited = str.split("");

  //Transforma a primeira letra do Array em maisculo e substitui no Array
  strSplited[0] = strSplited[0].toUpperCase();

  //Varre todo o array
  for (x = 0; x < strSplited.length; x++) {
    //Encontra as posições que estão vazias
    if (strSplited[x] == " ") {
        //Pega a próxima posição, transforma em maisculo e substitui no Array
      strSplited[x + 1] = strSplited[x + 1].toUpperCase();
    }
  }
  
  //Converte o Array para String
  return alert(strSplited.join(""));
}
