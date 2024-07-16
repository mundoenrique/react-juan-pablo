const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js'];
const numeros = [10, 20, 30];

// Filter
const nuevoArray = tecnologias.filter((tech) => tech !== 'HTML');
const resultado1 = numeros.filter((numero) => numero > 15);
console.log(resultado1);

// Includes
const resultado2 = tecnologias.includes('CSS');
console.log(resultado2);

// Some - Devuelve si al menos uno cumple la condición
const resultado3 = numeros.some((numero) => numero > 15);
console.log(resultado3);

// Find - Devuelve el primer elemento que cumple una condición
const resultado4 = numeros.find((numero) => numero > 20);
console.log(resultado4);

// Every - Retorna true o false si todos cumplen la condición
const resultado5 = numeros.every((numero) => numero > 5);
console.log(resultado5);

// Reduce - Retorna un acumulado del total
const resultado6 = numeros.reduce((total, numero) => total + numero, 0);
console.log(resultado6);
