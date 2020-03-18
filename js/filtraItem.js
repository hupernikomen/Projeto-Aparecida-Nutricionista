// OS COMENTARIOS POSTADOS NESSE ARQUIVO SÃO PARA CONSULTA DE ESTUDO

var campoFiltro = document.querySelector('#filtrar-tabela'); // INPUT

campoFiltro.addEventListener('input', function () {  // Cada vez que for digitado valor dentro do INPUT...

   var pacientes = document.querySelectorAll('.paciente');

   if (this.value.length > 0) {  // Se valor do INPUT for > 0...

      for (var i = 0; i < pacientes.length; i++) {
         var paciente = pacientes[i];
         var tdNome = paciente.querySelector('.info-nome');
         var nome = tdNome.textContent // Captura na variavel 'nome' os valores de CADA 'paciente'

         /*
          * Com o RegExp() (Expressão Regular) conseguimos filtrar de forma dinamica
          * cada item letra por letra.
          * Os parametros são: 1. O que você quer buscar; 2. Valores são caseSentive ou não
          */
         var expressao = new RegExp(this.value, 'i');


         if (!expressao.test(nome)) {  // Compara/Testa se o valor digitado(this.value) NÃO(!) é igual ao valor do paciente(nome)
            paciente.classList.add('invisivel');
         } else {
            paciente.classList.remove('invisivel');
         }
      }

   } else {

      for (let i = 0; i < pacientes.length; i++) {
         var paciente = pacientes[i];
         paciente.classList.remove('invisivel');
      }

   }
})