import fs from "fs";

const enemigos = ["Murciélago", "Esqueleto", "Slime"];

export function generarEnemigoAleatorio() {
  const randomIndex = Math.floor(Math.random() * enemigos.length);
  return enemigos[randomIndex];
}

var enemigo1 = generarEnemigoAleatorio();
var enemigo2 = generarEnemigoAleatorio();
var enemigo3 = generarEnemigoAleatorio();

console.log(enemigo1);
console.log(enemigo2);
console.log(enemigo3);
console.info("Los enemigos de este nivel fueron asignados");