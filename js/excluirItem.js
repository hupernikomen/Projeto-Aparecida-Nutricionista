var tabela = document.querySelector('#tabela-pacientes');

tabela.addEventListener('dblclick', function(event) {
   
   event.target.parentNode.classList.add('fadeOut');
   /*
    * event.target => É o elemento clicado
    * event.target.parentNode => É o pai do elemento clicado
    * 
    * Ou seja, clicando no elemento '<td>' o parentNode faz a execução ser feita no Pai '<tr>'
    */
   setTimeout(function(){
      event.target.parentNode.remove();
   }, 600)

})