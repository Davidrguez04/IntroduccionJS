/**Haz una función llamada valorarConocimientos
RECIBE: Un parámetro de entrada, llamada variable
Dentro comprobará el tipo de dato del parámetro, 
Si es tipo numérico devuelve por consola "Esto es un numero"
Si es tipo string escribe en el documento "Esto es "LM"". Se tiene que escribir tal cual (con las comillas dobles)
Además crea una variable llamada nombre que contenga vuestro nombre,
e imprimir por consola cada carácter del nombre (Esto se va a ejecutar siempre)
Ejemplo: Fran
F
r
a
n

¿Que devuelve cada console.log?
     var a=5;
     let b=3;
     
     if(true){
         var a=3;
         b=2;
         
         console.log(a); 
         console.log(b); 
     }
     
    console.log(a); 
    console.log(b);
 * 
 */
function valorarConocimientos(variable){
	if(typeof(variable)=="number"){
		document.write("Esto es un número");
		
	}
	else if(typeof(variable)=="string"){
		document.write("Esto es LM");
	}
	
	


}
function nombre(){
	var nombre="David";
	for(let i=0;i<nombre.length;i++){
		console.log(nombre.charAt(i))
	}
}

//¿Que devuelve cada console.log?
function ejercicio2(){
	   var a=5;
     let b=3;
     
     if(true){
         var a=3;
         b=2;
         
         console.log(a); //3
         console.log(b); //2
     }
     
    console.log(a); //3
    console.log(b);//2
}
  

