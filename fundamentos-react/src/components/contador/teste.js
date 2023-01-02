const mega = (array) => {
  const aleatorio = Math.floor(Math.random() * (60 + 1 - 1)) + 1;
  return array.includes(aleatorio) ? mega(array) : aleatorio;
};

gerarNum = (qtde) => {
  let numerosMega = [];
  for (let i = 0; i < qtde; i++) {
    numerosMega.push(mega(numerosMega));
  }
  return numerosMega.sort((n1, n2) => n1 - n2);
};

console.log(gerarNum(7));
