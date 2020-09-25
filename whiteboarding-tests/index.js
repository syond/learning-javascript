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

function adicionarNoInicioDoArray() {
  const cestaDeFrutas = ["banana", "abacaxi", "uva", "melancia"];

  const novaFruta = prompt(
    "Adicione algo ao inicio da cesta de frutas :)" +
      "\n" +
      cestaDeFrutas +
      " ... o que mais ?"
  );

  const novaCestaDeFrutas = [novaFruta, ...cestaDeFrutas];

  return alert("Essa é sua nova cesta de frutas: " + novaCestaDeFrutas);
}

function adicionarNoFimDoArray() {
  const cestaDeFrutas = ["banana", "abacaxi", "uva", "melancia"];

  const novaFruta = prompt(
    "Adicione algo ao final da cesta de frutas :)" +
      "\n" +
      cestaDeFrutas +
      " ... o que mais ?"
  );

  const novaCestaDeFrutas = [...cestaDeFrutas, novaFruta];

  return alert("Essa é sua nova cesta de frutas: " + novaCestaDeFrutas);
}

function adicionarNoInicioDoArraySemSpreadCriandoNovoArray() {
  const cestaDeFrutas = ["banana", "abacaxi", "uva", "melancia"];

  const novaFruta = prompt(
    "Adicione algo ao inicio da cesta de frutas :)" +
      "\n" +
      cestaDeFrutas +
      " ... o que mais ?"
  );

  let novaCestaDeFrutas = [];

  //Adiciona a nova fruta na primeira posição do Array
  novaCestaDeFrutas[0] = novaFruta;

  //Varre todo o Array cestaDeFrutas e copia os valores para novaCestaDeFrutas a partir da posição 1
  for (x = 0; x < cestaDeFrutas.length; x++) {
    novaCestaDeFrutas[x + 1] = cestaDeFrutas[x];
  }

  return alert("Essa é sua nova cesta de frutas: " + novaCestaDeFrutas);
}

function adicionarNoFimDoArraySemSpreadCriandoNovoArray() {
  const cestaDeFrutas = ["banana", "abacaxi", "uva", "melancia"];

  const novaFruta = prompt(
    "Adicione algo ao inicio da cesta de frutas :)" +
      "\n" +
      cestaDeFrutas +
      " ... o que mais ?"
  );

  let novaCestaDeFrutas = [];

  //Varre todo o Array cestaDeFrutas e copia os valores para novaCestaDeFrutas
  for (x = 0; x < cestaDeFrutas.length; x++) {
    novaCestaDeFrutas[x] = cestaDeFrutas[x];
  }

  //Adiciona a nova fruta na última posição do Array com a propriedade "length", que começa em 1.
  novaCestaDeFrutas[novaCestaDeFrutas.length] = novaFruta;

  return alert("Essa é sua nova cesta de frutas: " + novaCestaDeFrutas);
}

function inverterArray() {
  let arrayOriginal = [11, 12, 13, 14, 15, 16, 17];

  alert("Temos esse Array aqui: " + arrayOriginal);

  return alert(
    "E esse é o mesmo array só que invertido: " + arrayOriginal.reverse()
  );
}

function inverterArrayUtilizandoForCriandoNovoArray() {
  let arrayOriginal = [11, 12, 13, 14, 15, 16, 17];

  alert("Temos esse Array aqui: " + arrayOriginal);

  let arrayInvertido = [];

  for (x = arrayOriginal.length - 1; x > -1; x--) {
    arrayInvertido.push(arrayOriginal[x]);
  }

  return alert("E esse é o mesmo array só que invertido: " + arrayInvertido);
}
