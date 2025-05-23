// no se puede utilizar for ni for of

// 1️⃣ Camila está organizando datos en su sistema. Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array. Ejemplo: Si recibe [2, 5, 8], deberá mostrar:

//0 - 0
//5 - 5
//16 - 8

const multiplyNumbers = numbers => {
  //Era forEach porque es por consola
  const result = numbers.map((number, index) => {
    return number * index;
  });

  console.log(`${numbers} - ${result}`);
};
multiplyNumbers([2, 5, 8]);

// 2️⃣ Bego quiere hacer cálculos avanzados. Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice + 1 (el +1 es para evitar que se divida por 0). Ejemplo: Si recibe [10, 20, 30], deberá imprimir [10, 10, 10].

const dividedNumbers = numbers => {
  const result = numbers.map((number, index) => {
    return number / (index + 1);
  });
  console.log(result);
};
dividedNumbers([10, 20, 30]);

// 3️⃣ Sabrina está trabajando con archivos de texto. Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas. Ejemplo: Si recibe ["hola", "mundo"], deberá imprimir ["HOLA", "MUNDO"].

const uppercaseWords = words => {
  const result = words.map(word => word.toUpperCase()); //funciones de flecha se puede quitar el corchete y el return porque lo lleva intrinseco. Solo una operación.
  console.log(result);
};
uppercaseWords(['hola', 'mundo']);

// 4️⃣ Macarena está organizando una lista de ingredientes. Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen por esa letra. Debe funcionar con mayúsculas y minúsculas. Ejemplo: Si recibe (["Manzana", "Melón", "Pera", "Sandía"], "m"), deberá imprimir ["Manzana", "Melón"].

const ingredientsList = (words, letter) => {
  const result = words.filter(word => {
    return word.charAt(0).toLowerCase() === letter.toLowerCase();
    //return word.toUpperCase().startsWith(letter.toUpperCase()). Sería una forma mas corta.
  });
  console.log(result);
};
ingredientsList(['Manzana', 'Melón', 'Pera', 'Sandía'], 'm');

// 5️⃣ Camila está recopilando datos numéricos. Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array. Ejemplo: Si recibe [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], deberá mostrar 55.

const addNumbers = numbers => {
  const result = numbers.reduce((acc, number) => {
    return acc + number;
  });
  console.log(result);
};
addNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 6️⃣ Bego está creando informes detallados. Investiga el método Math.pow() Crea una función que reciba un array de 10 números y muestre por consola cada número, su cuadrado y su cubo en este formato: "Número: 2 - Cuadrado: 4 - Cubo: 8".

const powersOfNumbers = numbers => {
  const result = numbers.map(number => {
    const cuadrado = Math.pow(number, 2);
    const cubo = Math.pow(number, 3);
    console.log(`Número: ${number} - Cuadrado: ${cuadrado} - Cubo: ${cubo}`);
  });
  console.log(result);
};
powersOfNumbers([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);

// 7️⃣ Sabrina quiere modificar un mensaje secreto. Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula. Ejemplo: Si recibe "javascript", deberá imprimir "jAvAscrIpt".

// const secretCode = word => {
//   const splitWord = word.split('');
//   const vowels = 'AEIOUaeiou';
// };

// const joinWord = splitWord.reduce((acc, letter) => {
//   if (vowels.includes(letter)) {
//     return letter.toUpperCase();
//   } else {
//     return acc + letter;
//   }
// });

// console.log(result);

// secretCode(['javascript']);

// 8️⃣ Macarena está buscando números importantes. Crea una función que reciba un array de 10 números y te diga si alguno es mayor de 5. deberá mostrar: "Algún número es mayor de 5" "Ningún número es mayor de 5"

const overFive = numbers => {
  //revisar este, está mal.
  //este me da true o false
  const result = numbers.some(number => {
    if (number > 5) {
      console.log('Algún numero es mayor de 5');
    } else {
      console.log('Ningún numero es mayor de 5');
    }
  });
};
overFive([2, 4, 5, 6, 0, 3, 8, 9, 16]);
overFive([2, 4, 0, 3]);

// 9️⃣ Camila está filtrando resultados. Crea una función que reciba un array de 5 palabras y un número, y devuelva un array con las palabras que tienen esa longitud. Ejemplo: Si recibe ['hola', 'adios', 'gato', 'perro', 'casa'], 4, deberá imprimir ['hola', 'gato', 'casa'].

const wordsLengthFilter = (words, number) => {
  const result = words.filter(word => {
    return word.length === number;
  });
  console.log(result);
};
wordsLengthFilter(['hola', 'adios', 'gato', 'perro', 'casa'], 4);
wordsLengthFilter(['volar', 'osos', 'adios', 'gatitos'], 5);

// 🔟 Bego quiere comprobar divisores. Crea una función que reciba un array de números y un número, y devuelva un array con los números que sean divisores de ese número. Ejemplo: Si recibe [1, 2, 3, 4, 5, 6] y 2, deberá imprimir [1, 2, 4, 6].

const divider = (numbers, number2) => {
  const result = numbers.filter(number => {
    return number % number2 === 0;
  });
  console.log(result);
};
divider([1, 2, 3, 4, 5, 6], 2);
divider([6, 10, 90, 30], 3);

// 1️⃣1️⃣ Sabrina está seleccionando usuarios.
//Crea una función que reciba este array y te devuelva sólo los usuarios cuya edad sea menor de 30.

//const users = [
// { name: 'John', age: 25 },
// { name: 'Jane', age: 30 },
// { name: 'Bob', age: 20 }
// ];

// Ejemplo salida:
// Usuarios menores de 30: John, Bob

const ageUsers = users => {
  //El console esta dentro del bucle.
  const result = users.map(user => {
    if (user.age < 30) {
      console.log(`Usuarios menos de 30: ${user.name} `);
    }
  });
};
ageUsers([
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 20 }
]);

// 1️⃣2️⃣ Macarena quiere comprobar números pares.   Crea una función que reciba un array con 5 números y te diga si todos son pares o no. Ejemplo: Si recibe [2, 4, 6, 8, 10], deberá impimir Todos son pares.

const evenNumbers = numbers => {
  const result = numbers.every(number => {
    if (number % 2 === 0) {
      console.log('Todos son pares');
    }
  });
};
evenNumbers([2, 4, 6, 8, 10]);

// 1️⃣3️⃣ Abby quiere ordenar palabras por longitud.   Crea una función que reciba un array de 5 palabras y las ordene en base a su longitud, de menor a mayor. Ejemplo: Si recibe ["cielo", "sol", "estrella", "luz", "universo"], deberá imprimir ["sol", "luz", "cielo", "estrella", "universo"].

const sortLength = words => {
  const result = words.sort((a, b) => {
    return a.length - b.length;
  });
  console.log(result);
};
sortLength(['cielo', 'sol', 'estrella', 'luz', 'universo']);

// 1️⃣4️⃣ Camila quiere invertir palabras.   Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y minúsculas. A Camila no le gusta el método reverse(), así que quiere hacerlo de otra manera 😊. Ejemplo: Si recibe "Mariposas" deberá imprimir "sasopiraM".

const reverseWords = word => {
  const splitWord = word.split('');

  const result = splitWord.reduce((acc, letter) => {
    return letter + acc;
  });
  console.log(result);
};
reverseWords('Mariposas');

// 💪 Desafío Extra 1: Bego quiere simplificar un array de números de dos dígitos sumando sus dígitos. Crea una función que reciba un array de 5 números de dos dígitos y devuelva un array con la suma de los dígitos. Ejemplo: Si recibe [21, 34, 87, 10, 28], deberá imprimir [3, 7, 15, 1, 10].

const sumDigits = numbers => {
  numbers.forEach(number => {
    const numberToStrings = String(number);
    const firstDigit = Number(numberToStrings.charAt(0));
    const secondDigit = Number(numberToStrings.charAt(1));
    console.log(firstDigit + secondDigit);
  });
};
sumDigits([21, 34, 87, 10, 28]);

// 💪 Desafío Extra 2: Macarena quiere borrar usuarios específicos. Crea una función que reciba un id y borre al usuario correspondiente del siguiente array:
// const users = [
// { id: "user001", name: "Juan", surname: "Pérez", age: 30 },
// { id: "user002", name: "María", surname: "González", age: 25 },
// { id: "user003", name: "Pedro", surname: "Sánchez", age: 35 },
// { id: "user004", name: "Ana", surname: "Martínez", age: 28 },
// { id: "user005", name: "Luis", surname: "López", age: 40 }
// ];

// Ejemplo: Si recibe "user003", el array quedará sin Pedro.

const deleteUsers = user => {
  const users = [
    { id: 'user001', name: 'Juan', surname: 'Pérez', age: 30 },
    { id: 'user002', name: 'María', surname: 'González', age: 25 },
    { id: 'user003', name: 'Pedro', surname: 'Sánchez', age: 35 },
    { id: 'user004', name: 'Ana', surname: 'Martínez', age: 28 },
    { id: 'user005', name: 'Luis', surname: 'López', age: 40 }
  ];

  const result = users.filter(users => {
    return users.id !== user;
  });
  console.log(result);
};
deleteUsers('user003');
