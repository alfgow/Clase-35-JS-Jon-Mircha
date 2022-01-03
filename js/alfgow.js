console.warn(`Veamos los Ejercicios de la clase 35`);

//Ejercicio 5 Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

console.log(
	`%c "Ejercicio 5:  Programa una función que invierta las palabras de una cadena de texto", para resolver esto, primero validaremos el string con operador ternario y posteriormente utilizaremos reverse
  
  //Declararemos la funcion reverseString()
function reverseString(a) {
	//Primero Validamos si hay string
	!a
		? //Si no hay string, mandamos mensaje "No proporcionaste String"
		  console.log("No proporcionaste un string")
		: //En caso de que haya String, de acuerdo a mi investigacion, primero tenemos que convertir el string a un arreglo con split(""), una vez convertido a arreglo, aplicaremos el reverse() y finalmente agregaremos los espacios con join("")
		  console.log(a.split("").reverse().join(""));
} `,
	"color:yellow"
);

//Declararemos la funcion reverseString()
function reverseString(a) {
	//Primero Validamos si hay string
	!a
		? //Si no hay string, mandamos mensaje "No proporcionaste String"
		  console.log("No proporcionaste un string")
		: //En caso de que haya String, de acuerdo a mi investigacion, primero tenemos que convertir el string a un arreglo con split(""), una vez convertido a arreglo, aplicaremos el reverse() y finalmente agregaremos los espacios con join("")
		  console.log(a.split("").reverse().join(""));
}

reverseString("Hola alfgow");

// Ejercicio 6 Programa una función para contar el número de veces que se repite una palabra en un texto

console.log(
	`%c "Ejercicio 6: Programa una función para contar el número de veces que se repite una palabra en un texto", para resolver esto utilizaremos indexof, 

  function contarRepeticiones(b, c) {
	!b ? console.log("No hay String") : console.log(b.indexOf(c));
}

contarRepeticiones(
	"Like 'Oh, na-na-na-na-na
Na-na-na-na-na'
Say 'Oh, na-na-na-na-na
Na-na-na-na-na'

Say 'Oh, na-na-na-na-na'
Y lo seguimos bailando, sí
Y lo seguimos bailando, sí
Y tú me sigues gustando",
	"na"
);
  
 `,
	"color:red"
);

function contarRepeticiones(b, c) {
	!b
		? console.log("No hay String")
		: console.log(
				`El numero de veces que "${c}" se repite en "${b}" es:  ${b.indexOf(
					c
				)} `
		  );
}

contarRepeticiones(
	`Like 'Oh, na-na-na-na-na
Na-na-na-na-na'
Say 'Oh, na-na-na-na-na
Na-na-na-na-na'

Say 'Oh, na-na-na-na-na'
Y lo seguimos bailando, sí
Y lo seguimos bailando, sí
Y tú me sigues gustando`,
	"na"
);

//Ejercicio 7 Programa una función que valide si una palabra o frase dada, es un palíndromo
console.log(
	`%c"Ejercicio 7: Programa una función que valide si una palabra o frase dada, es un palíndromo"
  
  Para el Ejercicio propuesto he desarrollado la siguiente funcion
  
  function palindromo(d) {
	d.split("").reverse().join("") == d
		? console.log(
				'%c La Expresion \${d} si es un palindromo, ya que escrito al revés da: \${d
					.split("")
					.reverse()
					.join("")}',
				"color: green"
		  )
		: console.log(
				'%c La frase \${d} no es un palindromo, ya que escrito al revés da: \${d
					.split("")
					.reverse()
					.join("")}',
				"color:red"
		  );
}

palindromo("reconocer");

  `,
	"color:pink"
);

function palindromo(d) {
	d.split("").reverse().join("") == d
		? console.log(
				`%c La Expresion ${d} si es un palindromo, ya que escrito al revés da: ${d
					.split("")
					.reverse()
					.join("")}`,
				"color: green"
		  )
		: console.log(
				`%c La frase ${d} no es un palindromo, ya que escrito al revés da: ${d
					.split("")
					.reverse()
					.join("")}`,
				"color:red"
		  );
}

palindromo("reconocer");

//Ejercicio 8  Programa una función que elimine cierto patrón de caracteres de un texto dado
console.log(
	`%c"Ejercicio 7: Programa una función que valide si una palabra o frase dada, es un palíndromo"
  
  Para el Ejercicio propuesto he desarrollado la siguiente funcion
  
  const eliminar = (e, f) =>
	!e
		? console.log('No ingresaste texto')
		: !f
		? console.log('Necesitas una expresion para eliminar')
		: console.log(e.replace(new RegExp(f, "ig"), ""));

eliminar("001, 002, 003, 004, 005, 006, 007, 008, 009", "00");

  `,
	"color:yellow"
);

const eliminar = (e, f) =>
	!e
		? console.log(`No ingresaste texto`)
		: !f
		? console.log(`Necesitas una expresion para eliminar`)
		: console.log(e.replace(new RegExp(f, "ig"), ""));

eliminar("001, 002, 003, 004, 005, 006, 007, 008, 009", "00");
