document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Formulario4").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    
    var Familiar1 = document.getElementById('Familiar1').value;

    if(Familiar1.length == 0) 
    {
      alert('No has escrito nada en el Familiar1');
      evento.preventDefault
      return;
    }

    var Familiar2 = document.getElementById('Familiar2').value;

    if(Familiar2.length == 0) 
    {
      alert('No has escrito nada en el Familiar2');
      evento.preventDefault
      return;
    }

    var Familiar3 = document.getElementById('Familiar3').value;

    if(Familiar3.length == 0) 
    {
      alert('No has escrito nada en el Familiar3');
      evento.preventDefault
      return;
    }

    var Direccion1 = document.getElementById('Direccion1').value;

    if(Direccion1.length == 0) 
    {
      alert('No has escrito nada en la Direccion1');
      evento.preventDefault
      return;
    }

    var Direccion2 = document.getElementById('Direccion2').value;

    if(Direccion2.length == 0) 
    {
      alert('No has escrito nada en la Direccion2');
      evento.preventDefault
      return;
    }

    var Direccion3 = document.getElementById('Direccion3').value;

    if(Direccion3.length == 0) 
    {
      alert('No has escrito nada en la Direccion3');
      evento.preventDefault
      return;
    }

    var Telefono1 = document.getElementById('Telefono1').value;

    if(Telefono1.length == 0) 
    {
      alert('No has escrito nada en la Telefono1');
      evento.preventDefault
      return;
    }

    var Telefono2 = document.getElementById('Telefono2').value;

    if(Telefono2.length == 0) 
    {
      alert('No has escrito nada en el Telefono2');
      evento.preventDefault
      return;
    }

    var Telefono3 = document.getElementById('Telefono3').value;

    if(Telefono3.length == 0) 
    {
      alert('No has escrito nada en el Telefono3');
      evento.preventDefault
      return;
    }

    this.submit();
}
