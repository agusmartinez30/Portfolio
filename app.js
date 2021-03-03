const nombre = document.querySelector('.logo');



 nombre.onclick = function(){
    nombre.href = document.nombreform.urlform.value;
//Ingresamos un texto, en este caso el que pongan en el formulario
    nombre.innerText = document.nombreform.contentform.value;
   
    
   

 }