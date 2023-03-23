let augusto = document.querySelector('.augusto')
let fabio = document.querySelector('.fabio')
let delai = document.querySelector('.delai')

let pacientes = document.querySelectorAll('.paciente')


let somaAugusto = 0
let somaFabio = 0
let somaDelai = 0

for (let i = 0; i <= pacientes.length; i++) {


    let paciente = pacientes[i]

    let pacienteTd = paciente.querySelector('.info-medico')

    if (pacienteTd.textContent == 'Augusto') {

        somaAugusto = somaAugusto + 1
    }
    if (pacienteTd.textContent == 'Fabio') {

        somaFabio = somaFabio + 1
    }
    if (pacienteTd.textContent == 'Delai') {

        somaDelai = somaDelai + 1
    }


    augusto.textContent = somaAugusto
    fabio.textContent = somaFabio
    delai.textContent = somaDelai
}
