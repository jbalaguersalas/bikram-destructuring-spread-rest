//RESUELVE LOS EJERCICIOS AQUÍ
//1.
const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];
const [, ana] = empleados;
console.log(ana);
//2.
const [{ email: emailLuis }, ,] = empleados;
console.log(emailLuis);
//3.
let a = 5;
let b = 3;

[a, b] = [b, a];

//4.
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};
const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;

//5.
sumEveryOther(6, 8, 2, 3, 1);
sumEveryOther(11, 3, 12);

function sumEveryOther(...numeros) {
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    total = total + numeros[i];
  }
  return total;
}
console.log(sumEveryOther(6, 8, 2, 3, 1));
console.log(sumEveryOther(11, 3, 12));
//6.
function addOnlyNums(...numeros) {
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (typeof numeros[i] === "number") {
      total = total + numeros[i];
    }
  }
  return total;
}

console.log(addOnlyNums(1, "perro", 2, 4));

//7.
countTheArgs("gato", "perro");
countTheArgs("gato", "perro", "pollo", "oso");

function countTheArgs(...numeros) {
  let totalargs = 0;
  for (let i = 0; i < numeros.length; i++) {
    totalargs = totalargs + 1;
  }
  return totalargs;
}
console.log(countTheArgs("gato", "perro"));
console.log(countTheArgs("gato", "perro", "pollo", "oso"));
//8.

function combineTwoArrays(array1, array2) {
  return [...array1, ...array2];
}
console.log(combineTwoArrays([1, 2, 3], [4, 5, 6]));
//9.
onlyUniques("gato", "pollo", "cerdo", "cerdo");
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8);

function onlyUniques(...elementos) {
  let resultado = [];
  for (let i = 0; i < elementos.length; i++) {
    if (!resultado.includes(elementos[i])) {
      resultado.push(elementos[i]);
    }
  }
  return resultado;
}
console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo"));
console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8));
//10.
combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]);
combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]);

function combineAllArrays(...cualquierelemento) {
  let resultado2 = [];
  for (let i = 0; i < cualquierelemento.length; i++) {
    resultado2 = [...resultado2,...cualquierelemento[i]]
  }
  return resultado2
}
console.log(combineAllArrays([3,7,8,9],[2,7, 3, 1]));
console.log(combineAllArrays([2, 7, 8, 3], [6, 44, 8, 4, 2], [4, 9, 5, 3,]));
