console.log("Trabalhando com Condicionais");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 18;
const estaAcompanhada = false;

const temPassagemComprada = true;


console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem!!");
    listaDeDestinos.splice(1, 1); //removendo item
} else {
    console.log("Comprador menor de idade e não posso vender");
}

console.log("Embarque: \n\n");
if(idadeComprador >= 18 && temPassagemComprada == true){
    console.log("Boa viagem!");
}else{
    console.log("Você não pode embarcar.");
}



console.log(listaDeDestinos);

// if(idadeComprador >= 18){
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1,1); //removendo item
// }else{
//     //A pessoa é menor de idade
//     if(estaAcompanhada){
//         console.log("Comprador está acompanhado");
//         listaDeDestinos.splice(1,1); //removendo item
//     }else{
//         console.log("Comprador menor de idade e não posso vender");
//     }

// }




// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18); //tem que colocar dois "==" porque se não atribui valor a variavel
