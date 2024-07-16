// Funciones que retornan valores

function sumar1(numero1 = 0, numero2 = 0) {
  return numero1 + numero2;
}

const sumar2 = function (numero1 = 0, numero2 = 0) {
  return numero1 + numero2;
};

const sumar3 = (numero1 = 0, numero2 = 0) => numero1 + numero2;

const resultado1 = sumar1(10, 20);
const resultado2 = sumar2(10, 20);
const resultado3 = sumar3(10, 20);

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
