var campoFiltro = document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener('input', function () {

   var pacientes = document.querySelectorAll('.paciente');

   if (this.value.length > 0) {

      for (var i = 0; i < pacientes.length; i++) {
         var paciente = pacientes[i];
         var tdNome = paciente.querySelector('.info-nome');
         var nome = tdNome.textContent

         /*
          * Com o RegExp (Expressão Regular) conseguimos filtrar de forma dinamica
          * cada item letra por letra.
          * Os parametros são: 1. O que você quer buscar; 2. Se os valores são caseSentive ou não
          */

         var expressao = RegExp(this.value, 'i');

         if (!expressao.test(nome)) {
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