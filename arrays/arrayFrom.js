//Cria uma nova instância de array a partir de um parametro array.like ou iterable object

//O querySelectorAll nao vai ser um array e sim um NodeList
const divs = document.querySelectorAll('div');
//O Array.from vai retornar uma Array
const arr = Array.from(divs);
