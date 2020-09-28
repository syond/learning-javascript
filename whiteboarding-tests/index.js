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

  for (x = arrayOriginal.length - 1; x >= 0; x--) {
    arrayInvertido.push(arrayOriginal[x]);
  }

  return alert("E esse é o mesmo array só que invertido: " + arrayInvertido);
}

//bugado, tem que corrigir
function inverterArrayUtilizandoForSemCriarNovoArray() {
  let arrayNumeros = [10, 11, 12, 13, 14, 15];

  for (x = 0; x < arrayNumeros.length; x++) {
    //console.log("Array X" + arrayNumeros[x]);
    for (y = arrayNumeros.length - 1; y >= 0; y--) {
      let aux = arrayNumeros[x];
      arrayNumeros[x] = arrayNumeros[y];
      //arrayNumeros[x + 1] = aux;
      //console.log(arrayNumeros[y])
    }
  }

  console.log(arrayNumeros);
}

function numerosDeUmArrayMaioresQue20() {
  let arrayNumeros = [25, 32, 19, 5];

  alert("Em um array de números " + arrayNumeros + " os maiores que 20 são: ");

  for (x = 0; x < arrayNumeros.length; x++) {
    if (arrayNumeros[x] > 20) {
      alert(arrayNumeros[x]);
    }
  }
}

//bug, tem que corrigir
function organizarArrayOrdemCrescente() {
  let arrayNumeros = [9, 2, 20, 8, 7];

  alert(
    "Dado o seguinte Array: " +
      arrayNumeros +
      " \n Vamos organizar em ordem crescente."
  );

  for (x = 0; x < arrayNumeros.length; x++) {
    //Testa se a posição atual é maior do que a posição seguinte, se for ele faz a troca de valores das posições
    if (arrayNumeros[x] > arrayNumeros[x + 1]) {
      //Variável "aux" recebe o valor da posição seguinte para que o mesmo não seja perdido durante a troca
      let aux = arrayNumeros[x + 1];

      //Fazendo a troca
      arrayNumeros[x + 1] = arrayNumeros[x];
      arrayNumeros[x] = aux;

      //Testa se a posição atual é menor que a posição anterior, se for ele faz a troca de valores
      if (arrayNumeros[x] < arrayNumeros[x - 1]) {
        //Utilizando a mesma variável "aux" para não perder o valor da posição anterior
        aux = arrayNumeros[x - 1];

        //Fazendo a troca
        arrayNumeros[x - 1] = arrayNumeros[x];
        arrayNumeros[x] = aux;
      }
    }
  }

  alert("Agora está em ordem crescente: " + arrayNumeros);
}

//bug, tem que corrigir
function organizarArrayOrdemDecrescente() {
  let arrayNumeros = [9, 3, 20, 8, 10];

  let x = 0;

  do {
    if (arrayNumeros[x] < arrayNumeros[x + 1]) {
      let aux = arrayNumeros[x + 1];

      arrayNumeros[x + 1] = arrayNumeros[x];
      arrayNumeros[x] = aux;

      if (arrayNumeros[x] > arrayNumeros[x - 1]) {
        aux = arrayNumeros[x - 1];

        arrayNumeros[x - 1] = arrayNumeros[x];
        arrayNumeros[x] = aux;
      }
    }

    x++;

  } while (arrayNumeros[x] < arrayNumeros[x + 1]);
  
  

  console.log(arrayNumeros);
}

//alguma funcionalidade para usar ForEach()...
