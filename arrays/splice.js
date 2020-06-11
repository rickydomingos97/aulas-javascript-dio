// Altera um array adicionando novos elementos enquanto remove elementos antigos
const arr = [1, 2, 3, 4, 5];
console.log('\nItems foram removidos a partir da posição 2; ',arr.splice(2));
console.log(arr);
//'O primeiro 0 indica o início,
//o segundo 0 indica o que eu quero remover,
//e o último indica o que eu quero adicionar ao array'
console.log(arr.splice(0, 0, 'first'));
console.log(arr); 