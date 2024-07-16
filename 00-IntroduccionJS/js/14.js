// Funciones - Function Expression
const sumar1 = function (numero1 = 0, numero2 = 0) {
  console.log(numero1 + numero2);
};

sumar1(10, 20);
sumar1(300, 1);
sumar1(100);

sumar2(10, 20);
sumar2(300, 1);
sumar2(100);

function sumar2(numero1 = 0, numero2 = 0) {
  console.log(numero1 + numero2);
}
