
let tentativas = 0

const tela1 = document.querySelector('.tela1')
const tela2 = document.querySelector('.tela2')



// função callback
function sortearNumero(event){

    event.preventDefault() // Não faça o padrão deste evento ( Evento do form )
    
    const numeroSorteado = Math.round(Math.random() * 10)
    const inputNumber = document.querySelector("#inputNumber").value
    
    console.log(numeroSorteado, inputNumber)
    
    
    
    tentativas ++


    if (Number(inputNumber) != numeroSorteado) {

        document.querySelector('.tela1 h2').innerHTML = `
        Você errou ${tentativas}X!
        `
        console.log(numeroSorteado, inputNumber)
        
    } else {        

        tela1.classList.add('oculto')
        tela2.classList.remove('oculto')

        document.querySelector('.tela2 h2').innerHTML = 
        `
        Você chutou ${inputNumber}!
        Número sorteado ${numeroSorteado}
        Você acertou em ${tentativas} tentativa(s)!
        `

    }
}



// capturando eventos do html (Dom)
const btnJogar = document.querySelector('#btn-jogar')
const btnVoltar = document.querySelector('#btn-voltar')



// dois argumentos ( evento, e a ação)
btnJogar.addEventListener('click', sortearNumero)

// evento do botão voltar
btnVoltar.addEventListener('click', function(){
    tela1.classList.remove('oculto')
    tela2.classList.add('oculto')
    tentativas = 0
    document.querySelector('.tela1 h2').innerHTML = ''
    inputNumber.value = ""
    
})