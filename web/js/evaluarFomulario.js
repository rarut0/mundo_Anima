function revisar(elemento) {
    if (elemento.value==""){
        elemento.className='error';
    } else {
        elemento.className='form-input';
    }
}

function revisaremail(elemento) {
    if (elemento.value!=""){
        var dato = elemento.value;
        var expresion = /^([a-zA-Z0-9_.-])+@(([a-zA-z0-9-])+.)+([a-zA-Z0-9-]{2,4})+$/;
        if (!expresion.test(dato)) {
            elemento.className='error';
        } else {
        elemento.className='form-input';
        }
	}
}

function validar(form) {
  if(form.nombre.value==="") { //Si este campo está vacío
    alert('No has escrito tu nombre'); // Mensaje a mostrar
    return false; //devolvemos un valor negativo
  }
   if(form.apellido.value==="") { //Si este campo está vacío
    alert('No has escrito el apellido'); // Mensaje a mostrar
    return false; //devolvemos un valor negativo
  }
   if(form.nick.value==="") { //Si este campo está vacío
    alert('No has escrito tu Login'); // Mensaje a mostrar
    return false; //devolvemos un valor negativo
  }
   if(form.password.value==="") { //Si este campo está vacío
    alert('No has escrito tu contraseña'); // Mensaje a mostrar
    return false; //devolvemos un valor negativo
  }
  
   if(form.paswordRep.value==="") { //Si este campo está vacío
    alert('No has repetido tu contraseña'); // Mensaje a mostrar
    return false; //devolvemos un valor negativo
  }
  if(form.paswordRep.value!==form.pasword.value) { //Si este campo está vacío
    alert('No coinciden las contraseñas'); // Mensaje a mostrar
    return false; //devolvemos un valor negativo
  }
  if(form.email.value==="") { //Si este campo está vacío
    alert('No has escrito tu e-Mail'); // Mensaje a mostrar
    return false; //devolvemos un valor negativo
  }
  if(form.direccion.value==="") { //Si este campo está vacío
    alert('No has escrito tu direccion'); // Mensaje a mostrar
    return false; //devolvemos un valor negativo
  }
  
  if(form.codigo.value==="") { //Si este campo está vacío
    alert('No has escrito tu codigo postal'); // Mensaje a mostrar
    return false; //devolvemos un valor negativo
  }
  if(form.telefono.value==="") { //Si este campo está vacío
    alert('No has escrito tu telefono'); // Mensaje a mostrar
    return false; //devolvemos un valor negativo
  }
  
  if(form.edad.value==="") { //Si este campo está vacío
    alert('No has escrito tu telefono'); // Mensaje a mostrar
    return false; //devolvemos un valor negativo
  }
 
  return true; // Si esta todo bien, devolvemos Ok, positivo
}