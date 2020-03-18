// OS COMENTARIOS POSTADOS NESSE ARQUIVO SÃO PARA CONSULTA DE ESTUDO

var pacientes = document.querySelectorAll('.paciente')

// Valida PESO e ALTURA e calcula o IMC
pacientes.forEach(paciente => {  // arr.forEach...

	var peso = paciente.querySelector('.info-peso').textContent;
	var altura = paciente.querySelector('.info-altura').textContent;
	var imc = paciente.querySelector('.info-imc')

	var pesoInfo = validaPeso(peso); // TRUE ou FALSE
	var alturaInfo = validaAltura(altura); // TRUE ou FALSE

	if (!pesoInfo) { // SE FOR FALSE
		imc.textContent = "INVALIDO";
		pesoInfo = false;
		paciente.classList.add('paciente-invalido'); // adiciona uma .classe a tr
	}

	if (!alturaInfo) { // SE FOR FALSE
		imc.textContent = "INVALIDA"
		alturaInfo = false;
		paciente.classList.add('paciente-invalido'); // adiciona uma .classe a tr
	}

	if (pesoInfo && alturaInfo) {  // So calcula o IMC caso PESO e ALTURA estejam TRUE
		var imcCalculo = calculaImc(peso, altura);
		imc.textContent = imcCalculo;
	}

});

/**
 * As funções a seguir apresentam um retorno
 * Esse retorno que será repassado às variaveis como resultados
 */

function validaPeso(peso) {

	if (peso > 0 && peso < 500) {
		return true;
	} else {
		return false;
	}

}

function validaAltura(altura) {

	if (altura > 0 && altura < 3.0) {
		return true;
	} else {
		return false;
	}

}

function calculaImc(peso, altura) {  

	var imcCalculo;
	imcCalculo = peso / (altura * altura);
	return imcCalculo.toFixed(2)  // retorna o resultado do calculo de IMC

}
