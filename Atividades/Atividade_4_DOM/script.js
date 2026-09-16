let botao1 = document.getElementById("botao1");

botao1.addEventListener("click", function() {
    botao1.style.backgroundColor = "cyan";
    botao1.style.color = "white";
});

let botao2 = document.getElementById("botao2");

botao2.addEventListener("click", function() {
    botao2.innerText = "Texto alterado!";
});

let verificar = document.getElementById("verificar");

verificar.addEventListener("click", function() {
    let numero = Number(document.getElementById("numero"). value);
    let resultado = document.getElementById("resultado");

if (numero > 0) 
{
    resultado.innerText = "O número é maior que zero.";
}
else if (numero < 0) 
{
    resultado.InnerText = "O número é menor que zero.";
}
else
{
    resultado.InnerText = "O número é igual a zero.";
}

});