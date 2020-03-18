var tabela = document.querySelector('#tabela-pacientes');

tabela.addEventListener('dblclick', function(event) {
   
   event.target.parentNode.classList.add('fadeOut');
   /*
    * event.target => retorna o elemento clicado
    * event.target.parentNode => parentNode aponta para o elemento Pai
    * 
    * Ou seja, clicando no elemento '<td>' o parentNode faz a execução ser feita no Pai '<tr>'
    */
   setTimeout(function(){
      event.target.parentNode.remove();
   }, 600)

})