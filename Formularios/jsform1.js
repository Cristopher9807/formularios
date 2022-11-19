
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    
    var usuario = document.getElementById('nombre').value;

    if(usuario.length == 0) {
      alert('No has escrito nada en el Nombre');
      evento.preventDefault
      return;
    }

    

    var clave = document.getElementById('clave').value;
    if (clave.length == 0) 
  {
    alert('La clave no es válida');
    return;

  }

  var nombre = document.getElementById('nombre2').value;
  if(nombre.length == 0) {
    alert('No has escrito nada en el Nombre2');
    evento.preventDefault
    return;

  }

  var correo = document.getElementById('correo').value;
  if(correo.length == 0) {
    alert('No has escrito nada en el Correo');
    evento.preventDefault
    return;

  }

  var estate = document.getElementById('Estafeta').value;
    if(estate.length == 0) {
      alert('No has escrito nada en el Estafeta');
      evento.preventDefault
      return;

    }



    this.submit();
}

