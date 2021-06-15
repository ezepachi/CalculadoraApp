/*-----------------------------VARIABLES----------------------------------------------------*/
const dispValorAnterior= document.getElementById('valorSup');
const dispValorActual= document.getElementById('valorInf');
const botonesNum= document.querySelectorAll('number');
const botonesOperadores= document.querySelectorAll('operador');
var   ValorActual='';
var   ValorAnterior='';
var num1,num2,op;
/*-----------------------------FUNCIONES CALCULADORA----------------------------------------------------*/
  function Sumar(op1, op2) {
        return op1+op2
  }

  function Restar (op1, op2){
     return op1-op2
  }
   function Dividir (op1, op2){
     return op1/op2
  }

 function Multiplicar (op1, op2){
     return op1*op2
  }

  console.log(Dividir(2,5));
/*-----------------------------FUNCIONES DISPLAY----------------------------------------------------*/
 function agregoNum (num){
 	this.ValorActual=num;
 	console.log('ENTRO EN AGREGO NUM');
 	ImprimirValores();	
 }
 function ImprimirValores (){
 	console.log('ENTRO EN IMPRIMIR VALORES');
 	this.dispValorActual.textContent=this.ValorActual;
 	this.dispValorAnterior.textContent=ValorAnterior;
 };

/*-----------------------------FUNCION LIMPIAR DISPLAY----------------------------------------------------*/
function fnClean(){
   dispValorActual.textContent='';
   dispValorAnterior.textContent='';

};
// ---------------------------- FUNCION MOSTRAR EN DISPLAY----------------------
function fnMostrarNumber(n){
   console.log("EL NUMERO QUE PASO ES :" + n)  
   dispValorActual.textContent+=n;
};
//-----------------------------------------------------------------------
function deleteChar(){

};
function fnOperador(c){
   num1=dispValorActual.textContent;
   op=c;
   dispValorAnterior.textContent=num1;
   dispValorActual.textContent="";
    num1=parseInt(num1);
    return num1,op;
   }

function fnMuestro(){
   console.log("ENTRO EN FN MUESTRO");
   let num2=dispValorActual.textContent;
   num2=parseInt(num2);
   console.log("EL NUM1 ES="+ num1, "EL NUMERO 2 ES="+ num2,"EL OP ES ="+ op)
   resul=0;
   switch (op){
      case "+": resul=num1+num2; break
      case "-": resul=num1-num2; break
      case "X": resul=num1*num2; break
      case "%": resul=num1/num2; break
    
      }
      dispValorActual.textContent='';
      dispValorAnterior.textContent=resul;
    };

