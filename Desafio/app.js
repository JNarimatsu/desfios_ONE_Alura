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
}
