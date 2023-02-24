let nombre = prompt("Ingresa tu nombre");
alert("¡Bienvenido " + nombre + " a nuentra tienda!");
let precioTotal = 0;
let productos = [
  { nombre: "CK", precio: 22000 },
  { nombre: "BOSS", precio: 14000 },
  { nombre: "POLO", precio: 30066 },
];
let seleccion = prompt(
  "Por favor, elige uno de los siguientes productos: " +
    productos.map((p) => p.nombre.toUpperCase()).join("\n")
).toLowerCase();

for (let i = 0; i < productos.length; i++) {
  if (productos[i].nombre.toLowerCase() === seleccion) {
    precioTotal += productos[i].precio;
    break;
  }
}

alert(
  "Has seleccionado " +
    seleccion +
    " por un precio de " +
    precioTotal +
    ". ¡Gracias por tu elección!"
);
