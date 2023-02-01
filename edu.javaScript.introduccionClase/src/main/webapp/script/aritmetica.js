/**
 * 
 */
/*  La suma de 10.25 + 0.75, ¿qué tipo de dato devuelve?Haz que la siguiente operación de como resultado el 
número 57 sin cambiar el orden de nada (sustituye los ?):let numero1 = 23;
let numero2 = ?;
let resultadoOperacion = numero1 ? numero2;
console.log(resultadoOperacion);
Si queremos que la siguiente operación de como resultado el número 100, 
¿dónde colocarías los paréntesis sin cambiar el orden de la operación?let operacion = 46 + 8 * 2 / 2 + 46;
console.log(operacion);
¿Y si queremos que de como resultado 46.33?*/
function suma(){
	//declaramos variables
	let number1=10.25;
	let number2=0.75;
	let suma=number1+number2;
    //tipo de dato suma
      document.write(typeof(suma));
      //valor suma total
      document.write(suma);
      

      
}
function suma2(){
	//declaramos variables y suma
	let number1 = 23;
    let number2=34;
    let resultadoOperacion=number1+number2;
    console.log(resultadoOperacion);
}
function operacion(){
	let operacion = 46 + 8 * 2 / 2 + 46;
    console.log(operacion);
    if(true){
		let operacion=46*(8*2/8)-45.67;
		console.log(operacion);
	}
}
