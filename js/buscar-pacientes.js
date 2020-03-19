// OS COMENTARIOS POSTADOS NESSE ARQUIVO SÃO PARA CONSULTA DE ESTUDO

var botaoAdicionar = document.querySelector('#buscar-pacientes');

botaoAdicionar.addEventListener('click', function() {

   var xhr = new XMLHttpRequest();  // Cria uma requisição
   xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');  // Busca resultados
   xhr.addEventListener('load', function() {

      if (xhr.status == 200) {

         var resposta = xhr.responseText;
         var pacientes = JSON.parse(resposta);  // Converte de String para um Array
         
         pacientes.forEach(paciente => {
            adicionaPacienteNaTabela(paciente);  // Utiliza função de 'form.js' que insere 'pacientes' na tabela
         });
      } else {
         console.log('Erro')
      }

   });
   xhr.send();  // Envia requisição
})