//trabalhando com JS em um arquivo externo

const nome = "Fiap";
console.log(nome, "chamando variável criada com var");

escreve("Exemplo de função nominal");

//função nominal - udf
function escreve (titulo){
    //alert(titulo);
}

function mudaTitulo(novoTitulo) {
    document.querySelector("h1").innerHTML = novoTitulo;
}

const mudaTitulo2 = function(novoTitulo) {
    document.querySelector("h2").innerHTML = novoTitulo;
};
S
mudaTitulo2("Novo Subtitulo")

const relogio = () => {
    const date = new Date();
    mudaTitulo(date.toLocaleTimeString())
};
setInterval(relogio, 1000)

mudaTitulo('Novo Título')