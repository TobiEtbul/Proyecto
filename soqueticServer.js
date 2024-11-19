import { onEvent, startServer } from "soquetic";
import {
    generarEnemigoAleatorioZ1,
    generarEnemigoAleatorioZ2,
    generarEnemigoAleatorioZ3,
    golpeJugador,
    empalarI,
    empalarII, 
    empalarIII,
    lanza_carbonI,
    lanza_carbonII,
    lanza_carbonIII,
    lanza_carbon_llamasI,
    lanza_carbon_llamasII,
    lanza_carbon_llamasIII,
    cuchillo_venenosoI,
    cuchillo_venenosoII,
    cuchillo_venenosoIII, 
    bombaI,
    bombaII,
    bombaIII,
    habilidad_final,
    mate,
    choripanI,
    choripanII,
    choripanIII,
    cristalMagicoI,
    cristalMagicoII,
    cristalMagicoIII,
    sorteoHabilidades
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
onEvent ("Empalar1", () => {
    empalarI()
})
onEvent ("Empalar2", () => {
    empalarII()
})
onEvent ("Empalar3", () => {
    empalarIII()
})
onEvent ("lanza_carbon1", () => {
    lanza_carbonI()
})
onEvent ("lanza_carbon2", () => {
    lanza_carbonII()
})
onEvent ("lanza_carbon3", () => {
    lanza_carbonIII()
})
onEvent ("lanza_carbon_llamas1", () => {
    lanza_carbon_llamasI()
})
onEvent ("lanza_carbon_llamas2", () => {
    lanza_carbon_llamasII()
})
onEvent ("lanza_carbon_llamas3", () => {
    lanza_carbon_llamasIII()
})
onEvent ("cuchillo_venenoso1", () => {
    cuchillo_venenosoI()
})
onEvent ("cuchillo_venenoso2", () => {
    cuchillo_venenosoII()
})
onEvent ("cuchillo_venenoso3", () => {
    cuchillo_venenosoIII()
})
onEvent ("bomba1", () => {
    bombaI()
})
onEvent ("bomba2", () => {
    bombaII()
})
onEvent ("bomba3", () => {
    bombaIII()
})
onEvent ("habilidad_final1", () => {
    habilidad_final()
})
onEvent ("mate1", () => {
    mate()
})
onEvent ("choripan1", () => {
    choripanI()
})
onEvent ("choripan2", () => {
    choripanII()
})
onEvent ("choripan3", () => {
    choripanIII()
})
onEvent ("cristalMagico1", () => {
    cristalMagicoI()
})
onEvent ("cristalMagico2", () => {
    cristalMagicoII()
})
onEvent ("cristalMagico3", () => {
    cristalMagicoIII()
})

startServer();
