/*
Letras por números
Reemplazar las letras de un string por su index en el alfabeto (e.g. A = 1 , B = 2 , C = 3 ...)

Consideraciones Adicionales:

Ignorar espacios.
Hacer clean up del string antes de comenzar el swap (para eliminar acentos y caracteres especiales, se sugiere meter en este proceso de clean up el ignorado de espacios).
*/
const n = "abc";

const letrasXNum = (n) => {
  const Alf = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "m", "l"];
  let arry = [];
 for(const x of n){
   if(Alf.includes(x)){
     arry.push(Alf.indexOf(x) + 1)
   }
  }
  console.log(arry)
}

letrasXNum(n)