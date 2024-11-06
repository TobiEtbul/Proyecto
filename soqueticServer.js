import { onEvent, startServer } from "soquetic";
import {
  generarEnemigoAleatorioZ1,
  generarEnemigoAleatorioZ2,
  generarEnemigoAleatorioZ3,
} from "./main.js";

onEvent("pedirEnemigo1", () => {
  const enemigo = generarEnemigoAleatorioZ1();
  return enemigo;
});

onEvent("pedirEnemigo2", () => {
  const enemigo = generarEnemigoAleatorioZ2();
  return enemigo;
});

onEvent("pedirEnemigo3", () => {
  const enemigo = generarEnemigoAleatorioZ3();
  return enemigo;
});

startServer();
