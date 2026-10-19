//RESUELVE LOS EJERCICIOS AQUÍ
//1.
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];
const  [ , ana , ]  = empleados;
console.log(ana)
//2.
const [{email: emailLuis}, , ] = empleados
console.log(emailLuis)
//3.
let a = 5;
let b = 3;

[a,b] = [b,a]

//4.
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};
const {today:maximaHoy, tomorrow:maximaManana} = HIGH_TEMPERATURES;

//5.
sumEveryOther(6, 8, 2, 3, 1); 
sumEveryOther(11, 3, 12); 

function sumEveryOther(...numeros) {
    let total = 0
    for (let i=0; i <numeros.length; i++) {
        total =total + numeros [i];
    }
    return total
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
countTheArgs("gato", "perro"); //2
countTheArgs("gato", "perro", "pollo", "oso"); //4

function countTheArgs(...numeros) {

}
//8.