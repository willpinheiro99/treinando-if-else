let nome
let idade
let temCarta = false
let temCarro = false 

// pedido de informações do usuário

nome = prompt("Digite seu nome")
idade = parseInt(prompt("Digite sua idade"))

let opcaoCarta = prompt("Você tem carta de motorista? (sim/não)")
if (opcaoCarta == "sim") {
    temCarta = true
}

let opcaoCarro = prompt("Você tem carro? (sim/não)")
if (opcaoCarro == "sim") {
    temCarro = true 
}


//exibindo mensagem no console 

if (idade < 18 || !temCarta) {
    console.log (nome + ", você não pode dirigir.")
} else if (idade >= 18 && temCarta && !temCarro) {
    console.log (prompt(nome, 'você pode dirigir mas não tem carro.'))
}

else {
    console.log (prompt(nome + ", você será o motorista da rodada!"))
}