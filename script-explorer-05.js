
let tentativas = 0

const tela1 = document.querySelector('.tela1')
const tela2 = document.querySelector('.tela2')


// capturando eventos do html (Dom)
const btnJogar = document.querySelector('#btn-jogar')
const btnVoltar = document.querySelector('#btn-voltar')
const inputNumber = document.querySelector("#inputNumber")

// função callback
function sortearNumero(event){

    event.preventDefault() // Não faça o padrão deste evento ( Evento do form )
    
    const numeroSorteado = Math.round(Math.random() * 10)
    
    
    console.log(numeroSorteado, inputNumber)
    
    numeroDigitado = parseInt(inputNumber.value)
    
    if(!isNaN(numeroDigitado)){
        tentativas ++
    }    

    if(isNaN(numeroDigitado) || numeroDigitado < 0 || numeroDigitado > 10){
        document.querySelector('.tela1 h2').textContent = 'Digite um número válido entre 0 e 10'
    } else if (numeroDigitado != numeroSorteado) {

        document.querySelector('.tela1 h2').textContent = `
        Você errou ${tentativas}X!
        `
        console.log(numeroSorteado, numeroDigitado)
        
    } else {        

        trocarTela()

        document.querySelector('.tela2 h2').textContent = 
        `
        Você chutou ${numeroDigitado}!
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