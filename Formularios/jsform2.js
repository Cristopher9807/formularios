document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Formulario2").addEventListener('submit', validarFormulario); 
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

    var Direccion = document.getElementById('Direccion').value;
    if (Direccion.length == 0) 
  {
    alert('La Direccion no es válida');
    return;

  }


  var Telefono = document.getElementById('Telefono').value;
  if(Telefono.length == 0) 
  {
    alert('No has escrito nada en el Telefono');
    evento.preventDefault
    return;

  }

  var Cedula = document.getElementById('Cedula').value;
    if(Cedula.length == 0) 
    {
      alert('No has escrito nada en el Cedula');
      evento.preventDefault
      return;

    }

    var Provincia = document.getElementById('Provincia').value;

    if( Provincia.length == 0) 
    {
      alert('No has escrito nada en la  Provincia');
      evento.preventDefault
      return;
    }

    var Localidad = document.getElementById('Localidad').value;

    if(Localidad.length == 0) 
    {
      alert('No has escrito nada en la Localidad');
      evento.preventDefault
      return;
    }

    var Sueldo = document.getElementById('Sueldo').value;

    if(Sueldo.length == 0) 
    {
      alert('No has escrito nada en el Sueldo');
      evento.preventDefault
      return;
    }

    var Descuento = document.getElementById('Descuento').value;

    if(Descuento.length == 0) 
    {
      alert('No has escrito nada en el Descuento');
      evento.preventDefault
      return;
    }

    var Comision = document.getElementById('Comision').value;

    if(Comision.length == 0) 
    {
      alert('No has escrito nada en el Comision');
      evento.preventDefault
      return;
    }

 var Zona1 = document.getElementById('Zona1').value;

 if( Zona1.length == 0) 
 {
   alert('No has escrito nada en la Zona1');
   evento.preventDefault
   return;
 }

 var Zona2 = document.getElementById('Zona2').value;

 if( Zona2.length == 0) 
 {
   alert('No has escrito nada en la Zona2');
   evento.preventDefault
   return;
 }

 var Zona3= document.getElementById('Zona3').value;

 if( Zona3.length == 0) 
 {
   alert('No has escrito nada en la Zona3');
   evento.preventDefault
   return;
 }

 var Zona4 = document.getElementById('Zona4').value;

 if( Zona4.length == 0) 
 {
   alert('No has escrito nada en la Zona4');
   evento.preventDefault
   return;
 }

 var Zona5 = document.getElementById('Zona5').value;

 if( Zona5.length == 0) 
 {
   alert('No has escrito nada en la Zona5');
   evento.preventDefault
   return;
 }

 var Zona6 = document.getElementById('Zona6').value;

 if( Zona6.length == 0) 
 {
   alert('No has escrito nada en la Zona6');
   evento.preventDefault
   return;
 }

 var Zona7 = document.getElementById('Zona7').value;

 if( Zona7.length == 0) 
 {
   alert('No has escrito nada en la Zona7');
   evento.preventDefault
   return;
 }

 var Zona8 = document.getElementById('Zona8').value;

 if( Zona8.length == 0) 
 {
   alert('No has escrito nada en la Zona8');
   evento.preventDefault
   return;
 }

 var Zona9 = document.getElementById('Zona9').value;

 if( Zona9.length == 0) 
 {
   alert('No has escrito nada en la Zona9');
   evento.preventDefault
   return;
 }

 var Zona10 = document.getElementById('Zona10').value;

 if( Zona10.length == 0) 
 {
   alert('No has escrito nada en la Zona10');
   evento.preventDefault
   return;
 }

 var Zona11 = document.getElementById('Zona11').value;

 if( Zona11.length == 0) 
 {
   alert('No has escrito nada en la Zona11');
   evento.preventDefault
   return;
 }

 var Zona12 = document.getElementById('Zona12').value;

 if( Zona12.length == 0) 
 {
   alert('No has escrito nada en la Zona12');
   evento.preventDefault
   return;
 }
 


    this.submit();
}

