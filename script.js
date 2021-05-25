// Exemplo 1
// ERRADO: A variável contador está como global.
for(contador = 0; contador < 5; contador++){
  console.log(contador);
}

// CERTO: contador está sendo declarado como variável de bloco.
for(let contador = 0; contador < 5; contador++){
  console.log(contador);
}

// Exemplo 2
// ERRADO: Não usar ";" apenas porque o código funcionou sem.
if(5 > 2){
  console.log('É maior')
}else{
  console.log('É menor')
}

// CERTO: Sempre use ";" para evitar erros.
if(5 > 2){
  console.log('É maior');
}else{
  console.log('É menor');
}

// Exemplo 3
for(let i = 0; i < 2; i++){
  console.log(i);
}

// CERTO: Código comentado, explicando que o único erro era o fato do código não estar comentado.
for(let i = 0; i < 2; i++){
  console.log(i);
}