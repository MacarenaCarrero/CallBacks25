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

//const ingredientsList =

// 5️⃣ Camila está recopilando datos numéricos. Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array. Ejemplo: Si recibe [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], deberá mostrar 55.

const addNumbers = numbers => {};
