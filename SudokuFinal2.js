
//Funcion para desordenar los cuadrados y lograr aleatoridad(la copie)

Array.prototype.shuffle = function() {
  for ( var i = this.length-1; i > 0; i-- ) {
      var j = Math.floor( i * Math.random() );
      var tmp = this[ j ];
      this[ j ] = this[ i ];
      this[ i ] = tmp;
  }
  return this;
}

let columnaA = [];
let columnaB = [];
let columnaC = [];
let columnaD = [];
let columnaE = [];
let columnaF = [];
let columnaG = [];
let columnaH = [];
let columnaI = [];

//Funciones switch que sirven para darle algunos valores a las propiedades del tablero

function arrayFila(linea){
  switch(linea){
    case 0:
    return fila0;
    break;
    case 1:
    return fila1;
    break;
    case 2:
    return fila2;
    break;
    case 3:
    return fila3;
    break;
    case 4:
    return fila4;
    break;
    case 5:
    return fila5;
    break;
    case 6:
    return fila6;
    break;
    case 7:
    return fila7 ;
    break;
    case 8:
    return fila8;
    break;
  }
}

//Transforma la letra de la columna en una letra, sera clave para asignar valores en el tablero

function columnaNumerica(columna){
  switch(columna){
    case "A":
    return 0;
    break;
    case "B":
    return "1";
    break;
    case "C":
    return "2";
    break;
    case "D":
    return "3";
    break;
    case "E":
    return "4";
    break;
    case "F":
    return "5";
    break;
    case "G":
    return "6";
    break;
    case "H":
    return "7";
    break;
    case "I":
    return "8";
    break;
  }
}

//Creacion del tablero

class coordenada {constructor(columna, linea)
  {this.nombre = columna+linea,
   this.numero = "",   
   this.linea = linea,//es lo mismo que fila
   this.columna = columna,
   this.input = "input"+columna.toUpperCase()+linea,
   this.inputUsuario = "",//document.getElementById(input) en el futuro  
   this.arrayFila = "",
   this.arrayColumna = "",
   this.columnaNumerica = columnaNumerica(this.columna)
  }}

let tablero = [];
let arrayColumnas = ["A","B","C","D","E","F","G","H","I"]; 

function creadorTablero(fila){
  for (let i=0; i < arrayColumnas.length; i++)
  {tablero.push(new coordenada(arrayColumnas[i],fila))
  }
};


creadorTablero(0);
creadorTablero(1);
creadorTablero(2);
creadorTablero(3);
creadorTablero(4);
creadorTablero(5);
creadorTablero(6);
creadorTablero(7);
creadorTablero(8);

/*Funcion para borrar los numeros del cuadrado ya utilizados, 
 esta inserta en la funcion de filtradoAsignacionBorrado*/

function borrarNum(cuadrado,letra){for(let i = 0;i<cuadrado.length;i++){
  if (cuadrado[i]==letra[0]){
      
      cuadrado.splice(cuadrado.indexOf(cuadrado[i]),1)}}}

/*Funcion que filtra los numeros que se pueden usar, 
chequeando que no se encuentren en la columna y en la fila,
luego asigna y finalmente borra del cuadrado para que no se repitan*/

function filtradoAsignacionBorrado(cuadrado,columna,fila){
  
  let a = cuadrado.filter(function busqNumeroColumna(elemento){
  return columna.includes(elemento) == false})
a = a.filter(function busqNumeroFila(elemento){return fila.includes(elemento)== false})
fila[indice]=a[0];

borrarNum(cuadrado,a)
}

//Variables que se van a utilizar en la funcion

let flag = false;
let count;
let filaPrueba1;
let filaPrueba2;
let filaPrueba3;
let cuadradoUno;
let cuadradoDos;
let cuadradoTres;
let countreinicio = 0;

/*Funcion principal, que logra completar 3 cuadrados dispuestos horizontalmente, 
sera llamada tres veces para completar los 9 cuadrados del Sudoku*/

function asignacion(){

while (flag==false){
  count = 0;
  indice = -1;
  cuadradoUno = [1,2,3,4,5,6,7,8,9].shuffle();
  cuadradoDos = [1,2,3,4,5,6,7,8,9].shuffle();
  cuadradoTres = [1,2,3,4,5,6,7,8,9].shuffle();
  filaPrueba1 = [];
  filaPrueba2 = [];
  filaPrueba3 = [];
  

  indice++;
  
  filtradoAsignacionBorrado(cuadradoUno,columnaA,filaPrueba1);
  filtradoAsignacionBorrado(cuadradoUno,columnaA,filaPrueba2);
  filtradoAsignacionBorrado(cuadradoUno,columnaA,filaPrueba3);

  indice++;

  filtradoAsignacionBorrado(cuadradoUno,columnaB,filaPrueba1);
  filtradoAsignacionBorrado(cuadradoUno,columnaB,filaPrueba2);
  filtradoAsignacionBorrado(cuadradoUno,columnaB,filaPrueba3);

  indice++;

  filtradoAsignacionBorrado(cuadradoUno,columnaC,filaPrueba1);
  filtradoAsignacionBorrado(cuadradoUno,columnaC,filaPrueba2);
  filtradoAsignacionBorrado(cuadradoUno,columnaC,filaPrueba3);

  indice++;

  
  filtradoAsignacionBorrado(cuadradoDos,columnaD,filaPrueba1);
  filtradoAsignacionBorrado(cuadradoDos,columnaD,filaPrueba2);
  filtradoAsignacionBorrado(cuadradoDos,columnaD,filaPrueba3);
  

  indice++;

  filtradoAsignacionBorrado(cuadradoDos,columnaE,filaPrueba1);
  filtradoAsignacionBorrado(cuadradoDos,columnaE,filaPrueba2);
  filtradoAsignacionBorrado(cuadradoDos,columnaE,filaPrueba3);

  indice++;

  filtradoAsignacionBorrado(cuadradoDos,columnaF,filaPrueba1);
  filtradoAsignacionBorrado(cuadradoDos,columnaF,filaPrueba2);
  filtradoAsignacionBorrado(cuadradoDos,columnaF,filaPrueba3);

  indice++;

  filtradoAsignacionBorrado(cuadradoTres,columnaG,filaPrueba1);
  filtradoAsignacionBorrado(cuadradoTres,columnaG,filaPrueba2);
  filtradoAsignacionBorrado(cuadradoTres,columnaG,filaPrueba3);

  indice++;

  filtradoAsignacionBorrado(cuadradoTres,columnaH,filaPrueba1);
  filtradoAsignacionBorrado(cuadradoTres,columnaH,filaPrueba2);
  filtradoAsignacionBorrado(cuadradoTres,columnaH,filaPrueba3);

  indice++;

  filtradoAsignacionBorrado(cuadradoTres,columnaI,filaPrueba1);
  filtradoAsignacionBorrado(cuadradoTres,columnaI,filaPrueba2);
  filtradoAsignacionBorrado(cuadradoTres,columnaI,filaPrueba3);


flag = true;

/*Aca se busca que ningun valor sea undefined, puede darse de acuerdo a la aleatoriedad
que sea imposible encontrar numero*/

for (let i= 0; i<filaPrueba1.length; i++){
  if (filaPrueba1[i] == undefined){
    count++;
    countreinicio++;
  }}

for (let i= 0; i<filaPrueba2.length; i++){
  if (filaPrueba2[i] == undefined){
    count++;
    countreinicio++;
  }}

for (let i= 0; i<filaPrueba3.length; i++){
  if (filaPrueba3[i] == undefined){
    count++;
    countreinicio++;
  }}

//Count reinicia el bucle 
if (count > 0){
  flag = false;
}

/*La variable countreinicio fue creada porque en algunos cosas la disposicion de los numeros en
los primeros seis cuadrados hacia imposible completar los ultimos 3 cuadrados. En ese caso se 
reinicia toda la pagina.*/

if (countreinicio > 200){
  flag = true;
  location.reload();
}

  }}

  /*Comienzo de la aplicacion de las funciones para generar el Sudoku. Se utiliza la funcion
    principal y luego se utilizan esas funciones en los array correspondientes, para que luego
    al utilizar otra vez la funcion principal el filter evite la repeticion de numeros*/

  asignacion();
  let fila0= filaPrueba1;
  let fila1= filaPrueba2;
  let fila2= filaPrueba3;

  /*Las siguientes dos funciones sirven para asignar los numeros al tablero 
  (desde alli se realizara la vinculacion con el html)*/

  function arrayfilaAsig(arrayFila,fila){
    for (let i = 0; i<tablero.length;i++){
      if(tablero[i]["linea"] == fila){
        tablero[i]["arrayFila"] = arrayFila
      }
    }
  }

arrayfilaAsig(fila0,0);
arrayfilaAsig(fila1,1);
arrayfilaAsig(fila2,2);

  function asigTablero(){
    for (let i = 0; i<tablero.length;i++){
      let juan = tablero[i]["columnaNumerica"]
      tablero[i]["numero"] = tablero[i]["arrayFila"][juan]
    }
  }

asigTablero();

/*Esta funcion completa los arrayColumnas correspondientes. 
Es importante porque en la siguiente pasada de la funcion asignacion, 
el filter de la columna evitara la repeticion de numeros*/

function completaColumnas(columna,array){
  for (let i = 0; i < tablero.length; i++){
    if(tablero[i]["columna"] == columna && tablero[i]["numero"] != undefined){
array.push(tablero[i]["numero"])
    }
    
  }
}

completaColumnas("A",columnaA);
completaColumnas("B",columnaB);
completaColumnas("C",columnaC);
completaColumnas("D",columnaD);
completaColumnas("E",columnaE);
completaColumnas("F",columnaF);
completaColumnas("G",columnaG);
completaColumnas("H",columnaH);

flag= false;

asignacion();

let fila3= filaPrueba1;
let fila4= filaPrueba2;
let fila5= filaPrueba3;

arrayfilaAsig(fila3,3);
arrayfilaAsig(fila4,4);
arrayfilaAsig(fila5,5);

asigTablero();

completaColumnas("A",columnaA);
completaColumnas("B",columnaB);
completaColumnas("C",columnaC);
completaColumnas("D",columnaD);
completaColumnas("E",columnaE);
completaColumnas("F",columnaF);
completaColumnas("G",columnaG);
completaColumnas("H",columnaH);

flag = false;
asignacion();

let fila6= filaPrueba1;
let fila7= filaPrueba2;
let fila8= filaPrueba3;

arrayfilaAsig(fila6,6);
arrayfilaAsig(fila7,7);
arrayfilaAsig(fila8,8);

asigTablero();

//Sudoku completo, a partir de aca se desarrolla la interaccion con el usuario

//funcion para seleccionar numeros al azar

function random(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

/* Impide que los botones se vuelvan a presionar, ya que sino seleccionarian mas 
numeros al apretar nuevamente los botones*/

function anulaBotones(){ 
  let botonFacil = document.getElementById("facil")
  botonFacil.disabled = true;
  let botonIntermedio = document.getElementById("intermedio")
  botonIntermedio.disabled = true;
  let botonDificil = document.getElementById("dificil")
  botonDificil.disabled = true;
  }

let numerosMostrados = [] /*Array generado para que no se repitan los numeros en las
funciones de mostrar*/

function mostrarNumeros(numero){
  let i 
  let count = 0
  while (count <= numero){
    i = random(1,80)
    if (numerosMostrados.includes(i)==false){
    count++}; //Para que no se repitan los numeros
    document.getElementById(tablero[i]["nombre"]).innerHTML = tablero [i]["numero"];
    numerosMostrados.push(i)
    document.getElementById(tablero[i]["nombre"]).style.backgroundColor = "#00FFFF";
  }
  document.getElementById("inputA0").focus();//El focus empieza en el primer casillero siempre
  anulaBotones();
}

//Funcion que capta los ingresos del usuario

function inputUsuario(event){for(let i =0; i<tablero.length; i++){
  if(tablero[i]["input"]==event.target.id){
  tablero[i]["inputUsuario"] = event.target.value
  }
  }
  }

//Funcion para verificar las respuestas

let countVeri = 0

function verificacion(){
  
  for (let i = 0; i<tablero.length; i++){
    if (tablero[i]["inputUsuario"].length > 0 && tablero[i]["numero"] != tablero[i]["inputUsuario"]){
      countVeri++
      document.getElementById(tablero[i]["nombre"]).style.backgroundColor = "red";
      document.getElementById(tablero[i]["input"]).style.backgroundColor = "red";
    }
    if (tablero[i]["inputUsuario"].length > 0 && tablero[i]["numero"] == tablero[i]["inputUsuario"]){
      document.getElementById(tablero[i]["nombre"]).style.backgroundColor = "#00FF00";
      document.getElementById(tablero[i]["input"]).style.backgroundColor = "#00FF00";
  }}
    if (countVeri == 0){
      document.getElementById("inferior").innerHTML = "¡Todas tus respuestas son correctas!";

    }
    else document.getElementById("inferior").innerHTML = "¡Algunas de tus respuestas son incorrectas!";
}

/*Funcion que se activa cuando el usuario presiona el boton verificar para que no se puedan
  ingresar nuevamente valores*/

let arrayInput = []

for (let i = 0; i<81; i++){
  arrayInput.push(i)
}

let arrayInputFilter = []
let a

function anulaInput(){
arrayInputFilter = arrayInput.filter(number => numerosMostrados.includes(number) == false);
for (let i = 0; i<arrayInputFilter.length; i++){
a = arrayInputFilter[i]
let b = document.getElementById(tablero[a]["input"]); 
b.disabled = true;
} 
}

/*Funcion para mostrar el resultado correcto (no se utiliza finalmente)*/

function numeros(){for (let i = 0; i<tablero.length;i++){
  document.getElementById(tablero[i]["nombre"]).innerHTML=tablero[i]["numero"]}
}

//Funciones para que el focus se pueda mover con las flechas direccionales del teclado

function movFocus(event) {
let busq = event.target.id; 
if (event.which == 40) {focus(9,busq)} 
else if (event.which == 38){focus(-9,busq)} 
else if (event.which == 39){focus(1,busq)} 
else if(event.which == 37){focus(-1,busq)}}

function focus(suma,n){  //n = busq
  let j = 0;
  for (let i = 0; i < tablero.length; i ++)
  {if (tablero[i]["input"] == n)
  {j = i+suma}
  let flag = false;
  while (flag == false){
    if (numerosMostrados.includes(j) == true){
      j= j+suma;
    }
    if (numerosMostrados.includes(j) == false){
      flag = true;
    }
  }   
  document.getElementById(tablero[j]["input"]).focus()}}

function focusAbajo(n){
let j = 0;
for (let i = 0; i < tablero.length; i ++)
{if (tablero[i]["input"] == n)
{j = i+9}
let flag = false;
while (flag == false){
  if (numerosMostrados.includes(j) == true){
    j= j+9;
  }
  if (numerosMostrados.includes(j) == false){
    flag = true;
  }
}   
document.getElementById(tablero[j]["input"]).focus()}}

function focusArriba(n){
let j = 0
for (let i = 0; i < tablero.length; i ++)
{if (tablero[i]["input"] == n)
{j = i-9}
let flag = false;
while (flag == false){
  if (numerosMostrados.includes(j) == true){
    j= j-9;
  }
  if (numerosMostrados.includes(j) == false){
    flag = true;
  }
}   
document.getElementById(tablero[j]["input"]).focus()}}

function focusDerecha(n){
let j = 0
for (let i = 0; i < tablero.length; i ++)
{if (tablero[i]["input"] == n)
{j= i + 1}
let flag = false;
while (flag == false){
  if (numerosMostrados.includes(j) == true){
    j++
  }
  if (numerosMostrados.includes(j) == false){
    flag = true;
  }
}   
document.getElementById(tablero[j]["input"]).focus()}}



function focusIzquierda(n){
let j= 0
for (let i = 0; i < tablero.length; i ++)
{if (tablero[i]["input"] == n)
{j = i-1} 
let flag = false;
while (flag == false){
  if (numerosMostrados.includes(j) == true){
    j--
  }
  if (numerosMostrados.includes(j) == false){
    flag = true;
  }
}
document.getElementById(tablero[j]["input"]).focus()}}

// Establece atributo de que solo se puede incluir un caracter en el input

let inputLista = document.getElementsByTagName("input")
for (let i = 0; i<inputLista.length; i++){
let a = inputLista[i];
a.maxLength = 1;
}




 





