import { onEvent, startServer } from "soquetic";
import {
    generarEnemigoAleatorioZ1,
    generarEnemigoAleatorioZ2,
    generarEnemigoAleatorioZ3,
} from "./main.js";

onEvent("pedirEnemigos", () => {
    const enemigo1 = generarEnemigoAleatorioZ1();
    const enemigo2 = generarEnemigoAleatorioZ1();
    const enemigo3 = generarEnemigoAleatorioZ1();
    const data = {
        enemigo1,
        enemigo2,
        enemigo3,
    };
    console.log(data)
    return data;
});

startServer();
