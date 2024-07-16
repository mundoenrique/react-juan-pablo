// Objetos - Manipulación
const producto1 = {
  nombre: 'Tablet',
  precio: 300,
  disponible: false,
};

const producto2 = {
  nombre: 'Tablet',
  precio: 300,
  disponible: false,
};

const producto3 = {
  nombre: 'Tablet',
  precio: 300,
  disponible: false,
};

console.log({ producto1 });
console.log({ producto2 });
console.log({ producto3 });

Object.freeze(producto2);
Object.seal(producto2);

// Reescribir un valor
producto1.disponible = true;
producto2.disponible = true;
producto3.disponible = true;

// Sino existe, lo va a añadir
producto1.imagen = 'imagen.jpg';
producto2.imagen = 'imagen.jpg';
producto3.imagen = 'imagen.jpg';

// Eliminar propiedad
delete producto1.precio;
delete producto2.precio;
delete producto3.precio;

console.log({ producto1 });
console.log({ producto2 });
console.log({ producto3 });
