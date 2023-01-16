//Ejemplo1
function ejemplo1 (){
var a = 5;
var b = 10;

if (a === 5) {
  let a = 4;
  var b = 1;

  document.write("let a en if: " + a); 
  document.write(" || var b en if: " + b); 
}

document.write(" || var a fuera if: " + a);
document.write(" || var b fuera if: " + b);
}
//Ejemplo2
function ejemplo2(){if (x) {
  let foo;
 //let foo;
}
}

//Ejemplo3
function ejemplo31() {
  var x = 31;
  if (true) {
    var x = 71;   
    document.write("x como var dentro de if " + x);
  } 
document.write(" || x como var fuera del if" + x);
}

function ejemplo32() {
  let x = 31;
  if (true) {
    let x = 71;
    document.write("x como let dentro de if " + x); 
  }
document.write(" || x como let fuera del if" + x); 
}
// llamamos a las funciones
varTest();
letTest();

//Ejemplo4
function ejemplo4(){
var x = 'global';
let y = 'global';
document.write(this.x);
document.write(this.y);
}