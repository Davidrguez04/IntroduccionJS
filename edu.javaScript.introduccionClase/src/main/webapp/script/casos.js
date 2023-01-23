/**
 * 
 */
//typeof
function typeeof(){
     let variable1 = 10;
     let variable2 = 5.3;

      document.write(typeof(variable1));
      document.write(typeof variable2);
      }


//boolean
function boolean(){
     let es = true;
     document.write(typeof(es));
     document.write(es);
     }

//number
function number(){
     let variable1 = 10;
     let variable2 = 5.3;

      document.write(typeof(variable1));
      document.write(typeof variable2);
      }

//bigint
function bigint(){
     let numeroGrande = 4567891324657987654;
     let numeroGrandeCasteado = BigInt(987654321654987654);

     document.write(typeof(numeroGrande));
     document.write(numeroGrande);
     document.write(typeof(numeroGrandeCasteado));
    document.write(numeroGrandeCasteado);
    }
//string
function string(){

     let texto = "Soy un string";     

    document.write(typeof(texto));

     document.write(texto);
     }





//undefined
function undefined(){
     let variableVacia;
     document.write(variableVacia);

     document.write(typeof(variableVacia));
     }
     
     //null
function nulll(){
     let nulo = null;
     let vacio;
     document.write(nulo);
     document.write(typeof(nulo));
     }
     //Object
 function object(){
     let Objeto = new Object();
    

document.write(Objeto);
}
