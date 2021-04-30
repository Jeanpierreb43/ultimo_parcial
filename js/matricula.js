
a=[]

function cotizar(){


    estracto = document.getElementById('estracto').value;
    
    seguro=document.getElementById('seguro').value;
    parseInt(seguro);
    var valor_seguro=0;
    var valor_curso=0;
    meses1=document.getElementById('meses1').value;
    parseInt(meses1);
    cursos=document.getElementById('cursos').value;
    meses2=document.getElementById('meses2').value;
    parseInt(meses2);

    becas=document.getElementById('becas').value;
    aporte=document.getElementById('aporte').value;
    var Aporte1=document.getElementById('aporte').value;
    var cotizacion=0;


   //if(seguro=="No" && aporte=="No"){

    //document.getElementById("meses1").disabled=false;

   //}


   if(estracto==1){

    valor_seguro= meses1*3000;
    valor_curso=10000*meses2;
    cotizacion=valor_seguro+valor_curso+parseInt(Aporte1);

   }else  if(estracto==2){

    valor_seguro= meses1*5000;
    valor_curso=15000*meses1;
    cotizacion=valor_seguro+valor_curso+parseInt(Aporte1);
   }else if(estracto==3){
  
    valor_seguro= meses1*7000;
    valor_curso=20000*meses2;
    cotizacion=valor_seguro+valor_curso+parseInt(Aporte1);
   }else if(estracto==4){

    valor_seguro= meses1*9900;
    valor_curso=25000*meses2;
    cotizacion=valor_seguro+valor_curso+parseInt(Aporte1);
   }else if(estracto==5){

    valor_seguro= meses1*9900;
    valor_curso=30000*meses2;
    cotizacion=valor_seguro+valor_curso+parseInt(Aporte1);
   } else if(estracto==6){

    valor_seguro= meses1*9900;
    valor_curso=30000*meses2;
    cotizacion=valor_seguro+valor_curso+parseInt(Aporte1);
   }

   if(estracto==0 || seguro==0 ||valor_seguro==0 ||valor_curso==0 || meses1==0 || cursos==0 ||becas==0){
    alert("Debe seleccionar correctamente todos los campos")
    }else{

        if(becas=="No" && aporte!=0){
            alert("No puede aportar si selecciona 'No'")
        }else{
            if(seguro=="No" && meses1!=0){
                alert("No puede pagar el seguro si selecciona 'No'")   
            }else{
                datos={

                    estrato:estracto,
                    seguro:seguro,
                    meses1:meses1,
                    valor_seguro:valor_seguro,
                    cursos:cursos,
                    meses2:meses2,
                    valor_curso:valor_curso,
                    becas:becas,
                    aporte:aporte,
                    cotizacion:cotizacion
                }
                
                a.push(datos)
                jsonStore(a)
                tabla=`
                
                
                <tr>
                <th>Estrato</th>
                <th>Seguro</th>
                <th>Meses</th>
                <th>Valor del seguro </th>
                <th>Cursos</th>
                <th>Meses</th>
                <th>Valor del curso </th>
                <th>Beca </th>
                <th>Aporte de la beca </th>
                <th>Cotizacion</th>
                </tr>
                
                `
                
                for(var i=0; i<a.length;i++){
                
                
                    tabla+=`
                
                
                    <tr>
                    <td>${a[i].estrato}</th>
                    <td>${a[i].seguro}</th>
                    <td>${a[i].meses1}</th>
                    <td>${a[i].valor_seguro}</th>
                    <td>${a[i].cursos}</th>
                    <td>${a[i].meses2}</th>
                    <td>${a[i].valor_curso}</th>
                    <td>${a[i].becas}</th>
                    <td>${a[i].aporte}</th>
                    <td>${a[i].cotizacion}</th>
                    </tr>
                    
                    `
                    document.getElementById('tabla').innerHTML=tabla
                
                }

            }

        }
        }
        






}

function jsonStore(plist){
    localStorage.setItem('localpersonascursos',JSON.stringify(plist));
}

function obtenerlista(){
    var storelist = localStorage.getItem('localpersonascursos');
    if(storelist==null){
        a=[];
    }else{
        a=JSON.parse(storelist);
    }
    return vector;
}

function eliminarlocal(){
    localStorage.removeItem('localpersonascursos')
    tabla=`
                
                
            <tr>
            <th>Estrato</th>
            <th>Seguro</th>
            <th>Meses</th>
            <th>Valor del seguro </th>
            <th>Cursos</th>
            <th>Meses</th>
            <th>Valor del curso </th>
            <th>Beca </th>
            <th>Aporte de la beca </th>
            <th>Cotizacion</th>
            </tr>
                
            `
    for(var i=0; i<a.length;i++){
                
                
        tabla+=`
    
    
        <tr>
        <td>${''}</th>
        <td>${''}</th>
        <td>${''}</th>
        <td>${''}</th>
        <td>${''}</th>
        <td>${''}</th>
        <td>${''}</th>
        <td>${''}</th>
        <td>${''}</th>
        <td>${''}</th>
        </tr>
        
        `
        document.getElementById('tabla').innerHTML=tabla
    
    }
}