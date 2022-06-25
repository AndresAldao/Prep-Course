// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array [0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array.pop();
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let i=0; i<array.length;i++){
    array[i]=array[i]+1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var str=palabras[0];
  for (let i=1;i<palabras.length;i++){
    str=str + ' '+ palabras[i];
  }
  return str;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var a=0;
  for(let i=0;i<array.length;i++){
    if (array[i]===elemento) {
      a=1;
    } 
  }
  if (a===1) {
    return true;
  } else {
    return false;
  }
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var val=numeros[0];
  for(let i=1;i<numeros.length;i++){
    val=val+numeros[i];
  }
  return val;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var val=resultadosTest[0];
  for(let i=1;i<resultadosTest.length;i++){
    val=val+resultadosTest[i];
  }
  val=val/resultadosTest.length;
  return val;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var val=numeros[0];
  for(let i=1;i<numeros.length;i++){
    if (val<numeros[i]) {
      val=numeros[i];
    }
  }
  return val;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var a=0;
  if (arguments.length===0) {
    return a;
  } else {
    if (arguments.length===1) {
      a=arguments[0];
      return a;
      
    } else {
      a=arguments[0];
      for(let i=1;i<arguments.length;i++){
        a=a*arguments[i];
      }
      return a;
    }
    
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var a=0;
  for(let i=0;i<arreglo.length;i++){
    if (arreglo[i]>18) {
      a++;
    }
  }
  return a;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia===1 || numeroDeDia===7) {
    return 'Es fin de semana';
  }
  if (numeroDeDia===2 || numeroDeDia===3 || numeroDeDia===4 || numeroDeDia===5 || numeroDeDia===6) {
    return 'Es dia Laboral';
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if (n.shift===9) {
    return true;
  } else {
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var a,cont=1,com;
  a=arreglo.length;
  com=arreglo[0];
  for(let i=1;i<arreglo.length;i++){
    if (com===arreglo[i]) {
      cont++;
    }
  }
  if (cont===a) {
    return true;
  } else{
    return false;
  }
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var cont=0;
  var a=3;
  var nuevo=[]
  for(let i=0;i<array.length;i++){
    if (array[i]==='Enero' || array[i]==='Marzo' || array[i]==='Noviembre') {
      nuevo[cont]=array[i];
      cont++;
    }
  }
  if (cont===a) {
    return nuevo;
  } else {
    return 'No se encontraron los meses pedidos';
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var cont=0;
  var a=3;
  var nuevo=[]
  for(let i=0;i<array.length;i++){
    if (array[i]>100) {
      nuevo[cont]=array[i];
      cont++;
    }
  }
  return nuevo;
}



function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var i=1,suma=[];
  var cont=0;
  suma[0]=numero;
  while (i<11) {

    if (suma[i-1]===cont) {
     
      break;
    }
    suma[i]=suma[i-1]+2;
    i++;
    cont++;
  }
  suma.shift();
  if (i===11) {
    return suma;
  } else{
     return 'Se interrumpió la ejecución';
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var numero1 = [];
  var suma = numero;
  for(let i = 0; i <10; i++){
    if(i === 5){
      continue;
    }else{
    suma = suma + 2;
    numero1.push(suma);
  }
  }
  return numero1;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
