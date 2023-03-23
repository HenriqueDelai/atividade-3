let botaoAdicionar = document.querySelector('#adicionar-paciente')
//adicionando evento ao botão click
botaoAdicionar.addEventListener('click', function (evento) {
    //impede a natureza padrão do elemento
   evento.preventDefault()

    let form = document.querySelector('#form-adiciona')

    let paciente = obtemPacienteDoForm(form)

    let erros = validaPaciente(paciente);


    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }

    adicionaPacienteNaTabela(paciente)

    form.reset()
})

function obtemPacienteDoForm(form) {
    let paciente = {
        nome: form.nome.value,
        data: form.data.value,
        medico: form.medico.value
    }

    return paciente
}

function adicionaPacienteNaTabela(paciente) {
    let pacienteTr = montarTr(paciente)
    let tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTr)
}

function montarTr(paciente) {
    //createElemete cria um novo elemento de html
    let pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')

    //Fazendo filhos de elemntos html
    pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"))
    pacienteTr.appendChild(montarTd(paciente.data, "info-data"))
    pacienteTr.appendChild(montarTd(paciente.medico, "info-medico"))

    return pacienteTr
}

function montarTd(dado, classe) {
    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser nula");
    }

    if (paciente.data.length == 0) {
        erros.push("A data não pode ser nula");
    }

    if (paciente.medico.length == 0) {
        erros.push("O médico não pode ser nulo");
    }

    return erros;
}
function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montarTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}