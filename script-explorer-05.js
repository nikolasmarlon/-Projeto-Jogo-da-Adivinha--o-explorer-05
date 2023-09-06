
let tentativas = 0


function handleClick(event){
    event.preventDefault()
    
    const numeroSorteado = Math.round(Math.random() * 10)
    const inputNumber = document.querySelector("#inputNumber").value
    

    tentativas ++

    if (Number(inputNumber) != numeroSorteado) {

        document.querySelector('.tela1 h2').innerHTML = `
        Você errou ${tentativas}X!
        `
        console.log(`
        Seu chute ${inputNumber}
        Número sorteado ${numeroSorteado}
        Você errou ${tentativas}X!`)
        
    } else {
        console.log(`
        Seu chute ${inputNumber}
        Número sorteado ${numeroSorteado}
        Você acertou em ${tentativas}!`)

        document.querySelector('.tela1').classList.add('oculto')
        document.querySelector('.tela2').classList.remove('oculto')

        document.querySelector('.tela2 h2').innerHTML = `
        Seu chute ${inputNumber}
        Número sorteado ${numeroSorteado}
        Você acertou em ${tentativas}!
        `

    }
}