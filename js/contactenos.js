var tb = document.getElementById('tabla');

(function(){


    btn_editar = document.getElementById('edi');
    btn_enviar = document.getElementById('env');
   
   btn_editar.disabled=true;
   btn_enviar.disabled=false;
})();

vector = []
contactenos= window.localStorage;

function procesar(){
   
    
    
    var nom = document.getElementById('nombre').value;
   
    var apel = document.getElementById('apellido').value;
    
    var cor = document.getElementById('correo').value;
    
    var tele = document.getElementById('telefono').value;
    
    var dir = document.getElementById('direccion').value;

    var fec = document.getElementById('fecha').value

    var form = document.getElementById('formacion').value;
    
    var mot = document.getElementById('motivo').value;
    
    var snom = document.getElementById('snombre').value;
    
    var sapel = document.getElementById('sapellido').value;

    var id = document.getElementById('identificacion').value

    var cel = document.getElementById('celular').value

    var ed = document.getElementById('años').value

    var gen = document.getElementById('genero').value

    var sug = document.getElementById('sugerencia').value
    

   email= /\w+@\w+\.+[a-z]/;



if (nom==""|| apel==""||  cor==""|| tele==""|| dir==""|| fec==""|| form=="" || mot==""|| snom==""|| sapel=="" || id=="" || cel=="" || ed=="" || gen=="" || sug==""){

    alert("Obligatorio llenar todos los campos");

    return false;


}else if (isNaN(cel) & isNaN(tele) & isNaN(ed) & isNaN(id)){


    alert("Celular\nTelefono\nEdad\nDocumento\nDeben ser valores numericos");



}

else if (isNaN(cel )){

    alert("El valor del celular debe ser numero");

    return false;
}

else if(isNaN(ed)){


   
    alert("La edad debe ser numerica");



}else if(isNaN(tele)){



alert("El telefono debe ser numerico");

}else if (isNaN(id)){

 

 alert("Su identificación debe ser numerica");

    return false;


}else if (!email.test(cor)){


alert("Ingrese un correo valido");

return false;



} else if(!isNaN(nom)){

    alert("El nombre debe ser alfabetico")
}
else  if(!isNaN(snom)){

    alert("El Segundo nombre debe ser alfabetico")
}
else  if(!isNaN(apel)){

    alert("El apellido debe ser alfabetico")
}
else  if(!isNaN(sapel)){

    alert("El Segundo apellido debe ser alfabetico")
}
else if(!isNaN(nom) && !isNaN(apel) && !isNaN(snom) && !isNaN(sapel)){

    alert("El nombre completo y apellido completo debe ser alfabetico")
}

else if(gen=="Seleccionar" || form=="Seleccionar" || mov=="Seleccionar"){

    alert("Seleccione una opcion valida")
}


else {


    var variables={


        Nnombre:nom,
        Aapellido:apel,

        Nsnombre:snom,
        Asapellido:sapel,

        Ccorreo:cor,
        Ttelefono:tele,

        Ddireccion:dir,
        Ffecha:fec,

        Fformacion:form,
        Mmotivo:mot,
        
        Iidentificacion:id,
        Ccelular:cel,

        Eedad:ed,
        Ggenero:gen,

        Ssugerencia:sug
    
        };
    
    

    
        
       vector.push(variables)

       contactenos.setItem("Usuario", JSON.stringify(vector))
    
        dt=
        `<tr>
       <th>Primer nombre</th>
       <th>Segundo nombre</th>
       <th>Primer apellido</th>
       <th>Segundo apellido</th>
       <th>Correo</th>
       <th>Telefono</th>
       <th>Dirección</th>
       <th>Fecha de nacimiento</th>
       <th>Formacion</th>
       <th>Motivo</th>
       <th>Identificación</th>
       <th>Celular</th>
       <th>Edad</th>
       <th>Genero</th>
       <th>Sugerencia</th>
       <th>Eliminar</th>
       <th>Editar</th>
       
      
       </tr>`


for( var i = 0;i<vector.length;i++){



    
      dt += `
  <tr>
     <td>${vector[i].Nnombre}</td>
     <td>${vector[i].Aapellido}</td>
     <td>${vector[i].Nsnombre}</td>
     <td>${vector[i].Asapellido}</td>
     <td>${vector[i].Ccorreo}</td>
     <td>${vector[i].Ttelefono}</td>
     <td>${vector[i].Ddireccion}</td>
     <td>${vector[i].Ffecha}</td>
     <td>${vector[i].Fformacion}</td>
     <td>${vector[i].Mmotivo}</td>
     <td>${vector[i].Iidentificacion}</td>
     <td>${vector[i].Ccelular}</td>
     <td>${vector[i].Eedad}</td>
     <td>${vector[i].Ggenero}</td>
     <td>${vector[i].Ssugerencia}</td>
     <td><button class="form-control btn btn-outline-danger "onclick="eliminar(this)">ELIMINAR</button></td>
     <td><button class="btn btn-outline-warning" onclick="editar(this)"><b>EDITAR</b></button></td>
     
     
  
     </tr> `



    }

    document.getElementById('tabla').innerHTML= dt
 


 

  }
   
}


  function vaciar(){

    document.getElementById("miForm").reset();
  }




  function eliminar(td){

    var cont = document.getElementById('tabla').rows.length;

    swal({

        text:"Está segur@  de eliminar el registro?",
        buttons:["SÍ","NO"]

    })
    .then((confirmacion)=>{

if(confirmacion){

   
       
        
}else{

    borrar = td.parentNode.parentNode;
    borrar.parentNode.removeChild(borrar);
  
    
    var cont = document.getElementById('tabla').rows.length;

    swal("",{
        icon:"success",
        text:"Eliminacion existosa"
    })
}

if(cont==1){
    tb.style.display='none';
}


    })
  


  }

  





function editar(td){

    selectedRow = td.parentElement.parentElement;

document.getElementById('nombre').value=selectedRow.cells[0].innerHTML;
document.getElementById('apellido').value=selectedRow.cells[1].innerHTML;
document.getElementById('correo').value=selectedRow.cells[2].innerHTML;
document.getElementById('telefono').value=selectedRow.cells[3].innerHTML;
document.getElementById('direccion').value=selectedRow.cells[4].innerHTML;
document.getElementById('fecha').value=selectedRow.cells[8].innerHTML;
document.getElementById('formacion').value=selectedRow.cells[5].innerHTML;
document.getElementById('motivo').value=selectedRow.cells[7].innerHTML;
document.getElementById('snombre').value=selectedRow.cells[6].innerHTML;
document.getElementById('sapellido').value=selectedRow.cells[9].innerHTML;
document.getElementById('identificacion').value=selectedRow.cells[10].innerHTML;
document.getElementById('celular').value=selectedRow.cells[11].innerHTML;
document.getElementById('años').value=selectedRow.cells[12].innerHTML;
document.getElementById('genero').value=selectedRow.cells[13].innerHTML;
document.getElementById('sugerencia').value=selectedRow.cells[14].innerHTML;
btn_editar.disabled=false;
btn_enviar.disabled=true;

}

function Actualizar(){

    var apel = document.getElementById('apellido').value;
    
    var cor = document.getElementById('correo').value;
    
    var tele = document.getElementById('telefono').value;
    
    var dir = document.getElementById('direccion').value;

    var fec = document.getElementById('fecha').value

    var form = document.getElementById('formacion').value;
    
    var mot = document.getElementById('motivo').value;
    
    var snom = document.getElementById('snombre').value;
    
    var sapel = document.getElementById('sapellido').value;

    var id = document.getElementById('identificacion').value

    var cel = document.getElementById('celular').value

    var ed = document.getElementById('años').value

    var gen = document.getElementById('genero').value

    var sug = document.getElementById('sugerencia').value
    

   email= /\w+@\w+\.+[a-z]/;



if (nom==""|| apel==""||  cor==""|| tele==""|| dir==""|| fec==""|| form=="" || mot==""|| snom==""|| sapel=="" || id=="" || cel=="" || ed=="" || gen=="" || sug==""){

    alert("Obligatorio llenar todos los campos");

    return false;


}else if (isNaN(cel) & isNaN(tele) & isNaN(ed) & isNaN(id)){


    alert("Celular\nTelefono\nEdad\nDocumento\nDeben ser valores numericos");



}

else if (isNaN(cel )){

    alert("El valor del celular debe ser numero");

    return false;
}

else if(isNaN(ed)){


   
    alert("La edad debe ser numerica");



}else if(isNaN(tele)){



alert("El telefono debe ser numerico");

}else if (isNaN(id)){

 

 alert("Su identificación debe ser numerica");

    return false;


}else if (!email.test(cor)){


alert("Ingrese un correo valido");

return false;



} else if(!isNaN(nom)){

    alert("El nombre debe ser alfabetico")
}
else  if(!isNaN(snom)){

    alert("El Segundo nombre debe ser alfabetico")
}
else  if(!isNaN(apel)){

    alert("El apellido debe ser alfabetico")
}
else  if(!isNaN(sapel)){

    alert("El Segundo apellido debe ser alfabetico")
}
else if(!isNaN(nom) && !isNaN(apel) && !isNaN(snom) && !isNaN(sapel)){

    alert("El nombre completo y apellido completo debe ser alfabetico")
}

else if(gen=="Seleccionar" || form=="Seleccionar" || mov=="Seleccionar"){

    alert("Seleccione una opcion valida")
}
    else {
    
    
         variables={
    
    
            Nnombre:nom,
            Aapellido:apel,

            Nsnombre:snom,
            Asapellido:sapel,

            Ccorreo:cor,
            Ttelefono:tele,

            Ddireccion:dir,
            Ffecha:fec,

            Fformacion:form,
            Mmotivo:mot,
        
            Iidentificacion:id,
            Ccelular:cel,

            Eedad:ed,
            Ggenero:gen,

            Ssugerencia:sug
        
            };
           
    
         
            selectedRow.cells[0].innerHTML=variables.Nnombre;
            selectedRow.cells[1].innerHTML=variables.Aapellido;
            selectedRow.cells[2].innerHTML=variables.Ccorreo;
            selectedRow.cells[3].innerHTML=variables.Ttelefono;
            selectedRow.cells[4].innerHTML=variables.Ddireccion;
            selectedRow.cells[5].innerHTML=variables.Ffecha;
            selectedRow.cells[6].innerHTML=variables.Fformacion;
            selectedRow.cells[7].innerHTML=variables.Mmotivo;
            selectedRow.cells[8].innerHTML=variables.Nsnombre;
            selectedRow.cells[9].innerHTML=variables.Asapellido;
            selectedRow.cells[10].innerHTML=variables.Iidentificacion;
            selectedRow.cells[11].innerHTML=variables.Ccelular;
            selectedRow.cells[12].innerHTML=variables.Eedad;
            selectedRow.cells[13].innerHTML=variables.Ggenero;
            selectedRow.cells[14].innerHTML=variables.Ssugerencia;
           


            btn_editar.disabled=true;
            btn_enviar.disabled=false;
            contactenos.setItem("Usuario", JSON.stringify(variables));

           swal({
            text:"Edicion, exitosa",
            icon:"success"
        })
          
        
}
}