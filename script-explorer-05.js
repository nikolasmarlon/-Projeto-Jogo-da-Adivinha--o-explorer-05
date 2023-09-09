
let tentativas = 0

const tela1 = document.querySelector('.tela1')
const tela2 = document.querySelector('.tela2')


// capturando eventos do html (Dom)
const btnJogar = document.querySelector('#btn-jogar')
const btnVoltar = document.querySelector('#btn-voltar')


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

        trocarTela()

        document.querySelector('.tela2 h2').innerHTML = 
        `
        Você chutou ${inputNumber}!
        Número sorteado ${numeroSorteado}
        Você acertou em ${tentativas} tentativa(s)!
        `

    }
}



function reseteClique(){
    trocarTela()
    tentativas = 0
    document.querySelector('.tela1 h2').innerHTML = ''
    inputNumber.value = ""
}


function trocarTela(){
    tela1.classList.toggle('oculto')
    tela2.classList.toggle('oculto')
}


//eventos 
// dois argumentos ( evento, e a ação)
btnJogar.addEventListener('click', sortearNumero)

// evento do botão voltar
btnVoltar.addEventListener('click', reseteClique)