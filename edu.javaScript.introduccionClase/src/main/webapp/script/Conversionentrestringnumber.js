/**
 * 
 */
function pri(){
let num1 = "2";
let num2 = "3";
let suma= num1 + num2;
document.write(suma);
}

function seg(){
let num1 = 2;
let num2 = "3";
let suma= num1 + num2;
document.write(suma);
}

function ter(){
let num1 = "7";
let num2 = "5";
let operacion = Number(num1) + Number(num2);
document.write(operacion);
}

function cuar(){
let texto = "No soy un número";
let conversion= Number(texto);
document.write(typeof(conversion) + " " + conversion);
}

function quint(){
let numero = 8;
let texto= toString(numero);
document.write(typeof(texto));
}
function sext(){
	let num=8;
	let num2="5";
	let num3=9;
	let concat = num + num2+num3;
	let operacion = Number(num) + Number(num2)+ Number(num3);
	document.write(operacion+" ");
	document.write(typeof(operacion)+" ");
	document.write(typeof(concat));
}