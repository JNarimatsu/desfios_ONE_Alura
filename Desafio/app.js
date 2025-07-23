/* Desfio_01 
alert("Boas vindas ao nosso site!");
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeErro = "Erro! Preencha todos os campos para continuar";
alert(mensagemDeErro);
let nomeUsuario = prompt("Digite seu nome: ");
let idadeUsuario = prompt("Digite sua idade: ")
if (idadeUsuario >=18){
    alert(nomeUsuario + ", já pode tirar habilitação!")
} else{
    alert("Que pena " + nomeUsuario + ", ainda não pode tirar habilitação")
}*/

//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", 
// mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
/*let diaSemana = prompt("Qual o dia da semana ?");
if(diaSemana == "Sábado"){
    alert("Bom fim de semana!");
} else if(diaSemana == "Domingo"){
    alert("Bom fim de semana!");
} else {
    alert("Boa semana!");
}*/

//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero = prompt("Informe um número:")
if(numero >0){
    alert("Número positivo")
} else if (numero ==0){
    alert("Zero é um número neutro")
} else{
    alert("Número negativo")
}
