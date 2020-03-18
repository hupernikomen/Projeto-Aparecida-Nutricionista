var pacientes = document.querySelectorAll('.paciente')

pacientes.forEach(paciente => {

	var peso = paciente.querySelector('.info-peso').textContent;
	var altura = paciente.querySelector('.info-altura').textContent;

	var imc = paciente.querySelector('.info-imc')

	var pesoInfo = validaPeso(peso);
	var alturaInfo = validaAltura(altura);

	if (!pesoInfo) {
		console.log("PESO INVALIDO!");
		imc.textContent = "INVALIDO";
		pesoInfo = false;
		paciente.classList.add('paciente-invalido'); // adiciona uma .classe a tr
	}

	if (!alturaInfo) {
		console.log("ALTURA INVALIDA!");
		imc.textContent = "INVALIDA"
		alturaInfo = false;
		paciente.classList.add('paciente-invalido'); // adiciona uma .classe a tr
	}

	if (pesoInfo && alturaInfo) {
		var imcCalculo = calculaImc(peso, altura);
		imc.textContent = imcCalculo;
	}

});

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
	return imcCalculo.toFixed(2)

}
