var titulo = document.querySelector('.titulo')
titulo.textContent = 'Aparecida Nutricionista'

var pacientes = document.querySelectorAll('.paciente')

for (var index = 0; index < pacientes.length; index++) {
  var paciente = pacientes[index]
  CalculaIMC(paciente)
}

function CalculaIMC (paciente) {
  var peso = paciente.querySelector('.info-peso').textContent
  var altura = paciente.querySelector('.info-altura').textContent

  var tdIMC = paciente.querySelector('.info-imc')

  var pesoValido = true
  var alturaValida = true

  var errorMessage = ''

  if (!validaPeso(peso)) {
    pesoValido = false
    errorMessage = 'Peso Inválido'
  }

  if (!validaAltura(altura)) {
    alturaValida = false
    errorMessage = 'Altura Inválida'
  }

  if (pesoValido && alturaValida) {
    var imc = calculaIMC(peso, altura)
    tdIMC.textContent = imc
  } else {
    tdIMC.textContent = errorMessage
    paciente.classList.add('paciente-invalido')
  }
}
