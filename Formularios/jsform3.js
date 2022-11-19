document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Formulario3").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    
    var Codigo = document.getElementById('Codigo').value;

    if(Codigo.length == 0) {
      alert('No has escrito nada en el Codigo');
      evento.preventDefault
      return;
    }

    
    var nombre = document.getElementById('Nombre').value;
  if(nombre.length == 0) 
  {
    alert('No has escrito nada en el Nombre');
    evento.preventDefault
    return;

  }

  this.submit();

}