// no se puede utilizar for ni for of

// 1️⃣ Camila está organizando datos en su sistema. Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array. Ejemplo: Si recibe [2, 5, 8], deberá mostrar:

//0 - 0
//5 - 5
//16 - 8

const multiplyNumbers = numbers => {
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
  const result = words.map(word => {
    return word.toUpperCase();
  });
  console.log(result);
};
uppercaseWords(['hola', 'mundo']);

// 4️⃣ Macarena está organizando una lista de ingredientes. Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen por esa letra. Debe funcionar con mayúsculas y minúsculas. Ejemplo: Si recibe (["Manzana", "Melón", "Pera", "Sandía"], "m"), deberá imprimir ["Manzana", "Melón"].

const ingredientsList = (words, letter) => {
  const result = words.filter(word => {
    return word.charAt(0).toLowerCase() === letter.toLowerCase();
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

const secretCode = word => {
  let result = word.map(letter => {
    const vowels = 'aeiou';

    if (vowels.includes(letter)) {
      result += letter.toUpperCase();
    }
  });
  console.log(result);
};
secretCode(['javascript']);
