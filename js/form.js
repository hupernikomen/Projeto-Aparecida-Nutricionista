// OS COMENTARIOS POSTADOS NESSE ARQUIVO SÃO PARA CONSULTA DE ESTUDO

var botaoEnviar = document.querySelector('#adicionar-paciente');
var mensagemErro = document.querySelector('#mensagem-erro')

botaoEnviar.addEventListener('click', function (event) {

   event.preventDefault();

   var form = document.querySelector('#form-adiciona');

   var paciente = obtemPacienteDoForm(form);
   var pacienteTr = montaTr(paciente);

   var erros = validaPaciente(paciente);

   if (erros.length > 0) {  
      
      mensagemErro.innerHTML = ''

      erros.map((erro) => {
         var li = document.createElement('li')
         li.textContent = erro
         mensagemErro.appendChild(li)
      })

      return;
   }

   var tabela = document.querySelector("#tabela-pacientes");
   tabela.appendChild(pacienteTr)

   form.reset()

})

function obtemPacienteDoForm(form) {

   var paciente = {
      nome: form.nome.value,
      peso: form.peso.value,
      altura: form.altura.value,
      gordura: form.gordura.value,
      imc: calculaImc(form.peso.value, form.altura.value)
   }

   return paciente;
   
}

function montaTr(paciente) {

   var pacienteTr = document.createElement('tr');
   pacienteTr.classList.add('paciente');

   pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
   pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
   pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
   pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
   pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

   return pacienteTr

}

function montaTd(dado, classe) {

   var td = document.createElement('td');
   td.textContent = dado;
   td.classList.add(classe);
   return td;

}

function validaPaciente(paciente) {

   var erros = []

   mensagemErro.innerHTML = ''
   if (paciente.nome.length == 0) {
      erros.push('Digite um nome valido')
   }

   if (!validaPeso(paciente.peso) || paciente.peso.length == 0) {
      erros.push('Digite um peso valido')
   } 

   if (!validaAltura(paciente.altura) || paciente.peso.length == 0) {
      erros.push('Digite uma altura valida')
   }

   if (paciente.gordura.length == 0) {
      erros.push('Digite uma gordura valida')
   }

   return erros;

}