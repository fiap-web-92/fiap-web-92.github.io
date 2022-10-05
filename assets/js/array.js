// const carrosDOM = document.querySelector("#carros");

// const veiculos = ['Chevrolet', 'Ford', 'Fiat', 'Vw', 'Honda', 'Toyota', 'Hyundai'];

// //push adiciona no final, e unshift no início
// veiculos.push('BMW', 'Mercedes');
// veiculos.unshift('Audi');

// //shift remove o primeiro elemento, pop remove o último
// const primeiro = veiculos.shift();
// console.log('Removendo o primeiro elemento do array', primeiro);
// const ultimo = veiculos.pop();
// console.log('Removendo o último elemento do array', ultimo);

// //o splice remove um item específico (ou mais) do array
// const posicao = 2;
// const removido = veiculos.splice(posicao, 1);
// const removidos = veiculos.splice(1, 2);
// //o splice também consegue adicionar itens
// const removidos2 = veiculos.splice(1, 2, 'Ferrari', 'Lamborghini');

// veiculos.forEach((value, key) => {
//     carrosDOM.innerHTML += `<option name"${key}">${value}</option>`
// });

/////////////////////////////////////////////

const nbaTeams = ['Warriors', 'Raptors', 'Lakers', 'Celtics', 'Bucks', '76ers'];

const newNba = nbaTeams.slice(3, 2);

console.log(nbaTeams);
console.log(newNba);

////////////////////////////////////////////

// const nameSomeone = 'Isadora Aureliano de Araújo';
// const nameArray = nameSomeone.split(' ');
// const nameComplete = [nameArray[0], nameArray.slice(-1)].join(' ');
// console.log(nameComplete);

const searchingCeltics = (nameTime) => { 
   return nameTime == 'Celtics' || nameTime == 'Raptors';
}

const celticsMap = nbaTeams.map(searchingCeltics); //retorna um novo array, mapeando e buscando no array anterior.
const celticsFilter = nbaTeams.filter(searchingCeltics); //retorna um novo array, procura do começo ao fim do array anterior, quem retornou true para a função usada.
const celticsFind = nbaTeams.find(searchingCeltics); //retorna a primeira ocorrência de uma busca com o parâmetro que a função determinou.

console.log(celticsMap, "map");
console.log(celticsFilter, "filter");
console.log(celticsFind, "find");