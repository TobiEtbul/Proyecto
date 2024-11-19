import { fork } from "child_process";
import fs from "fs";
let enemigosZ1 = JSON.parse(fs.readFileSync("./JSON/EnemigosZ1.json"));
let enemigosZ2 = JSON.parse(fs.readFileSync("./JSON/EnemigosZ2.json"));
let enemigosZ3 = JSON.parse(fs.readFileSync("./JSON/EnemigosZ3.json"));
let bosses = JSON.parse(fs.readFileSync("./JSON/EnemigosBosses.json"));
let habilidades_act = JSON.parse(fs.readFileSync("./JSON/Habilidades_act.json"));
let habilidades_pas = JSON.parse(fs.readFileSync("./JSON/habilidades_pas.json"));


let dataM = fs.readFileSync("./JSON/negro.json");

var daño = dataM.ATK;
var areaDMG = dataM.areaATK;
var vidaM = dataM.HPM;
var estamina = dataM.estamina;
var inmunidad = dataM.inmunidad;
var fuego = dataM.fuego;
var veneno = dataM.veneno;
var lentitud = dataM.lentitud;
let habilidades = habilidades_act.concat(habilidades_pas);

var enemigos = [];

export function generarEnemigoAleatorioZ1() {
  var i = Math.floor(Math.random() * enemigosZ1.length);
  var enemigo = enemigosZ1[i];
  enemigos.push(enemigo);
  return enemigo;
}
export function generarEnemigoAleatorioZ2() {
  var i = Math.floor(Math.random() * enemigosZ2.length);
  var enemigo = enemigosZ2[i];
  enemigos.push(enemigo);
  return enemigo;
}
export function generarEnemigoAleatorioZ3() {
  var i = Math.floor(Math.random() * enemigosZ3.length);
  var enemigo = enemigosZ3[i];
  enemigos.push(enemigo);
  return enemigo;
}
for (let j = 0; j < 3; j++) {
  generarEnemigoAleatorioZ1();
}

console.log(enemigos[0].HP);
console.log(enemigos[1].HP);
console.log(enemigos[2].HP);

let turnoActual = "jugador"; // Inicia el turno el jugador
let cooldownEMP = 3;
let cooldownLANZ = 1;
let cooldownLLA = 4;
let cooldownCUC = 5;
let cooldownBOM = 7;
let cooldownFinal = 10;
let cooldownMate = 5;
let cooldownChor = 7;
let cooldownCris = 6;

// Función para cambiar de turno
function cambiarTurno() {
  if (turnoActual === "jugador") {
    turnoActual = "enemigos";
    cooldownBomba();
    cooldownChoripan();
    cooldownCuchillo();
    cooldownEmpalar();
    cooldownLanzaCar();
    cooldownLanzaCarLla();
    cooldownMatienzo();
    cooldownTaladro();
    cooldownCrisMagico();
   fuego1;
   fuego2,
   fuego3;
  } else turnoActual = "jugador";
}
console.log(`Turno actual: ${turnoActual}`);

function sacar_habilidades() {
  inmunidad = true;
  if ((inmunidad = true)) {
    fuego = false;
    veneno = false;
    lentitud = false;
  }
}
function lentitudF() {
  lentitud = true;
  if ((lentitud = true)) {
    cooldownEMP--;
    cooldownCris--;
    cooldownChor--;
    cooldownMate--;
    cooldownFinal--;
    ooldownBOM--;
    cooldownCUC--;
    cooldownLLA--;
    cooldownLANZ--;
    lentitud = false;
  }
}
function fuegoE() {
  fuego = true;
  if ((fuego = true)) {
    HPM = HPM - 5;
  }
}
function fuego1() {
let fueguito = 0
  if (enemigos[0].fuego == true && fueguito < 3) {
  enemigos[0].HP = enemigos[0].HP - 10;
  fueguito++ ;
} else if (enemigos[0].fuego == true && fueguito >= 3) {
enemigos[0].fuego == false;
fueguito = 0;
}
}
function fuego2() {
  let fueguito = 0
    if (enemigos[1].fuego == true && fueguito < 3) {
    fueguito++ ;
    enemigos[1].HP = enemigos[1].HP - 10;
  } else if (enemigos[1].fuego == true && fueguito >= 3) {
  enemigos[1].fuego == false;
  }
}
function fuego3() {
    let fueguito = 0
      if (enemigos[2].fuego == true && fueguito < 3) {
      fueguito++ ;
      enemigos[2].HP = enemigos[2].HP - 10;
    } else if (enemigos[2].fuego == true && fueguito >= 3) {
    enemigos[2].fuego == false;
    }
}
function golpeJugador() {
  if (enemigos[0].HP > 0) {
    enemigos[0].HP = enemigos[0].HP - daño;
    enemigos[1].HP = enemigos[1].HP - areaDMG;
    enemigos[2].HP = enemigos[2].HP - areaDMG;
  } else if (enemigos[1].HP > 0) {
    enemigos[1].HP = enemigo[1].HP - daño;
    enemigos[2].HP = enemigos[2].HP - areaDMG;
  } else if (enemigos[2].HP > 0) {
    enemigos[2].HP = enemigos[2].HP - daño;
  }
}
function emplalarI() {
  cooldownEMP = 0;
  if (estamina >= 15 && cooldownEMP <= 3) {
    if (enemigos[0].HP > 0) {
      enemigos[0].HP = enemigos[0].HP - (daño * 120) / 100;
      enemigos[1].HP = enemigos[1].HP - (daño * 120) / 100;
      enemigos[2].HP = enemigos[2].HP - (daño * 120) / 100;
    } else if (enemigos[1].HP > 0) {
      enemigos[1].HP = enemigos[1].HP - (daño * 120) / 100;
      enemigos[2].HP = enemigos[2].HP - (daño * 120) / 100;
    } else if (enemigos[2].HP > 0) {
      enemigos[2].HP = enemigos[2].HP - (daño * 120) / 100;
    }
  } else alert("¡estamina insuficiente!");
}
function emplalarII() {
  cooldownEMP = 0;
    if (estamina >= 20 && cooldownEMP <= 3 && turnoActual == 'jugador') {
      if (enemigos[0].HP > 0) {
        enemigos[0].HP = enemigos[0].HP - (daño * 150) / 100;
        enemigos[1].HP = enemigos[1].HP - (daño * 150) / 100;
        enemigos[2].HP = enemigos[2].HP - (daño * 150) / 100;
      } else if (enemigos[1].HP > 0) {
        enemigos[1].HP = enemigos[1].HP - (daño * 150) / 100;
        enemigos[2].HP = enemigos[2].HP - (daño * 150) / 100;
      } else if (enemigos[2].HP > 0) {
        enemigos[2].HP = enemigos[2].HP - (daño * 150) / 100;
      }
    } else alert("¡estamina insuficiente!");
}
function emplalarIII() {
  cooldownEMP = 0;
  if (estamina >= 25 && cooldownEMP <= 3 && turnoActual == 'jugador') {
    if (enemigos[0].HP > 0) {
      enemigos[0].HP = enemigos[0].HP - (daño * 200) / 100;
      enemigos[1].HP = enemigos[1].HP - (daño * 200) / 100;
      enemigos[2].HP = enemigos[2].HP - (daño * 200) / 100;
    } else if (enemigos[1].HP > 0) {
      enemigos[1].HP = enemigos[1].HP - (daño * 200) / 100;
      enemigos[2].HP = enemigos[2].HP - (daño * 200) / 100;
    } else if (enemigos[2].HP > 0) {
      enemigos[2].HP = enemigos[2].HP - (daño * 200) / 100;
    }
  } else alert("¡estamina insuficiente!");
}
function lanza_carbonI() {
  cooldownLANZ = 0;
  if (estamina >= 5 && cooldownLANZ <= 1 && turnoActual == 'jugador') {
    if (enemigos[0].HP > 0) {
      enemigos[0].HP = enemigos[0].HP - (daño * 100) / 100;
      enemigos[1].HP = enemigos[1].HP - daño * 0;
      enemigos[2].HP = enemigos[2].HP - daño * 0;
    } else if (enemigos[2].HP > 0) {
      enemigos[1].HP = enemigos[1].HP - (daño * 100) / 100;
      enemigos[2].HP = enemigos[2].HP - daño * 0;
    } else if (enemigo[3].HP > 0) {
      enemigos[2].HP = enemigos[2].HP - (daño * 100) / 100;
    }
  } else alert("¡estamina insuficiente!");
}
function lanza_carbonII() {
  cooldownLANZ = 0;
  if (estamina >= 7 && cooldownLANZ <= 1 && turnoActual == 'jugador') {
    if (enemigos[0].HP > 0) {
      enemigos[0].HP = enemigos[0].HP - (daño * 125) / 100;
      enemigos[1].HP = enemigos[1].HP - daño * 0;
      enemigos[2].HP = enemigos[2].HP - daño * 0;
    } else if (enemigos[2].HP > 0) {
      enemigos[1].HP = enemigos[1].HP - (daño * 125) / 100;
      enemigos[2].HP = enemigos[2].HP - daño * 0;
    } else if (enemigo[3].HP > 0) {
      enemigos[2].HP = enemigos[2].HP - (daño * 125) / 100;
    }
  } else alert("¡estamina insuficiente!");
}
function lanza_carbonIII() {
  cooldownLANZ = 0;
  if (estamina >= 10 && cooldownLANZ <= 1 && turnoActual == 'jugador') {
    if (enemigos[0].HP > 0) {
      enemigos[0].HP = enemigos[0].HP - (daño * 150) / 100;
      enemigos[1].HP = enemigos[1].HP - daño * 0;
      enemigos[2].HP = enemigos[2].HP - daño * 0;
    } else if (enemigos[1].HP > 0) {
      enemigos[1].HP = enemigos[1].HP - (daño * 150) / 100;
      enemigos[2].HP = enemigos[2].HP - daño * 0;
    } else if (enemigo[2].HP > 0) {
      enemigos[2].HP = enemigos[2].HP - (daño * 150) / 100;
    }
  } else alert("¡estamina insuficiente!");
}
function lanza_carbon_llamasI() {
  cooldownLLA = 0;
  if (estamina >= 20 && cooldownLLA <= 4 && turnoActual == 'jugador') {
    cooldownLANZ = 0;
 
    if (enemigos[0].HP > 0) {
      enemigos[0].HP = enemigos[0].HP - (daño * 160) / 100;
      enemigos[1].HP = enemigos[1].HP - daño * 0;
      enemigos[2].HP = enemigos[2].HP - daño * 0;
      enemigos[0].fuego == true;
    } else if (enemigos[1].HP > 0) {
      enemigos[1].HP = enemigos[1].HP - (daño * 160) / 100;
      enemigos[2].HP = enemigos[2].HP - daño * 0;
      enemigos[1].fuego == true;

    } else if (enemigo[2].HP > 0) {
      enemigos[2].HP = enemigos[2].HP - (daño * 160) / 100;
      enemigos[2].fuego == true;

    }
  }else alert("¡estamina insuficiente!");
}
function lanza_carbon_llamasII() {
  cooldownLLA = 0;
  if (estamina >= 25 && cooldownLLA <= 4 && turnoActual == 'jugador') {
    if (enemigos[0].HP > 0) {
      enemigos[0].HP = enemigos[0].HP - (daño * 190) / 100;
      enemigos[1].HP = enemigos[1].HP - daño * 0;
      enemigos[2].HP = enemigos[2].HP - daño * 0;
      enemigos[0].fuego == true;
    } else if (enemigos[1].HP > 0) {
      enemigos[1].HP = enemigos[1].HP - (daño * 190) / 100;
      enemigos[2].HP = enemigos[2].HP - daño * 0;
      enemigos[1].fuego == true;

    } else if (enemigo[2].HP > 0) {
      enemigos[2].HP = enemigos[2].HP - (daño * 190) / 100;
      enemigos[2].fuego == true;

    }
} else alert("¡estamina insuficiente!");
}
function lanza_carbon_llamasIII() {
  cooldownLLA = 0;
  if (estamina >= 30 && cooldownLLA <= 4 && turnoActual == 'jugador') {
    if (enemigos[0].HP > 0) {
      enemigos[0].HP = enemigos[0].HP - (daño * 220) / 100;
      enemigos[1].HP = enemigos[1].HP - daño * 0;
      enemigos[2].HP = enemigos[2].HP - daño * 0;
      enemigos[0].fuego == true;
    } else if (enemigos[1].HP > 0) {
      enemigos[1].HP = enemigos[1].HP - (daño * 220) / 100;
      enemigos[2].HP = enemigos[2].HP - daño * 0;
      enemigos[1].fuego == true;

    } else if (enemigo[2].HP > 0) {
      enemigos[2].HP = enemigos[2].HP - (daño * 220) / 100;
      enemigos[2].fuego == true;

    }
  } else alert("¡estamina insuficiente!");
}
function cuchillo_venenosoI() {
  cooldownCUC = 0;
  if (estamina >= 25 && cooldownLANZ <= 5 && turnoActual == 'jugador') {
    if (enemigos[0].HP > 0) {
      enemigos[0].HP = enemigos[0].HP - (daño * 140) / 100;
      enemigos[1].HP = enemigos[1].HP - daño * 0;
      enemigos[2].HP = enemigos[2].HP - daño * 0;
    } else if (enemigos[2].HP > 0) {
      enemigos[1].HP = enemigos[1].HP - (daño * 140) / 100;
      enemigos[2].HP = enemigos[2].HP - daño * 0;
    } else if (enemigo[3].HP > 0) {
      enemigos[2].HP = enemigos[2].HP - (daño * 140) / 100;
    }
  } else alert("¡estamina insuficiente!");
}
function cuchillo_venenosoII() {
  cooldownCUC = 0;
  if (estamina >= 30 && cooldownLANZ <= 5 && turnoActual == 'jugador') {
    if (enemigos[0].HP > 0) {
      enemigos[0].HP = enemigos[0].HP - (daño * 140) / 100;
      enemigos[1].HP = enemigos[1].HP - daño * 0;
      enemigos[2].HP = enemigos[2].HP - daño * 0;
    } else if (enemigos[2].HP > 0) {
      enemigos[1].HP = enemigos[1].HP - (daño * 140) / 100;
      enemigos[2].HP = enemigos[2].HP - daño * 0;
    } else if (enemigo[3].HP > 0) {
      enemigos[2].HP = enemigos[2].HP - (daño * 140) / 100;
    }
  } else alert("¡estamina insuficiente!");
}
function cuchillo_venenosoIII() {
  cooldownCUC = 0;
  if (estamina >= 30 && cooldownCUC <= 5) {
    if (enemigo1.HP > 0) {
      enemigo1.HP = enemigo1.HP - (daño * 180) / 100;
      enemigo2.HP = enemigo2.HP - daño * 0;
      enemigo3.HP = enemigo3.HP - daño * 0;
      //falta el veneno
    } else if (enemigo2.HP > 0) {
      enemigo2.HP = enemigo2.HP - (daño * 180) / 100;
      enemigo3.HP = enemigo3.HP - daño * 0;
      //falta el veneno
    } else if (enemigo3.HP > 0) {
      enemigo3.HP = enemigo3.HP - (daño * 180) / 100;
      //falta el veneno
    }
  } else alert("¡estamina insuficiente!");
}
function bombaI() {
  if (estamina >= 35 && cooldownBOM <= 7) {
    cooldownBOM = 0;

    if (enemigo1.HP > 0) {
      enemigo1.HP = enemigo1.HP - (daño * 180) / 100;
      enemigo2.HP = enemigo2.HP - (daño * 180) / 100;
      enemigo3.HP = enemigo3.HP - (daño * 180) / 100;
    } else if (enemigo2.HP > 0) {
      enemigo2.HP = enemigo2.HP - (daño * 180) / 100;
      enemigo3.HP = enemigo3.HP - (daño * 180) / 100;
    } else if (enemigo3.HP > 0) {
      enemigo3.HP = enemigo3.HP - (daño * 180) / 100;
    }
  } else alert("¡estamina insuficiente!");
}
function bombaII() {
  if (estamina >= 45 && cooldownBOM <= 7) {
    cooldownBOM = 0;

    if (enemigo1.HP > 0) {
      enemigo1.HP = enemigo1.HP - (daño * 210) / 100;
      enemigo2.HP = enemigo2.HP - (daño * 210) / 100;
      enemigo3.HP = enemigo3.HP - (daño * 210) / 100;
    } else if (enemigo2.HP > 0) {
      enemigo2.HP = enemigo2.HP - (daño * 210) / 100;
      enemigo3.HP = enemigo3.HP - (daño * 210) / 100;
    } else if (enemigo3.HP > 0) {
      enemigo3.HP = enemigo3.HP - (daño * 210) / 100;
    }
  } else alert("¡estamina insuficiente!");
}
function bombaIII() {
  if (estamina >= 60 && cooldownBOM <= 7) {
    cooldownBOM = 0;
    if (enemigo1.HP > 0) {
      enemigo1.HP = enemigo1.HP - (daño * 250) / 100;
      enemigo2.HP = enemigo2.HP - (daño * 250) / 100;
      enemigo3.HP = enemigo3.HP - (daño * 250) / 100;
    } else if (enemigo2.HP > 0) {
      enemigo2.HP = enemigo2.HP - (daño * 250) / 100;
      enemigo3.HP = enemigo3.HP - (daño * 250) / 100;
    } else if (enemigo3.HP > 0) {
      enemigo3.HP = enemigo3.HP - (daño * 250) / 100;
    }
  } else alert("¡estamina insuficiente!");
}
function habilidad_final() {
  if (estamina >= 70 && cooldownFinal <= 10) {
    cooldownFinal = 0;
    if (enemigo1.HP > 0) {
      enemigo1.HP = enemigo1.HP - (daño * 500) / 100;
      enemigo2.HP = enemigo2.HP - (daño * 500) / 100;
      enemigo3.HP = enemigo3.HP - (daño * 500) / 100;
      enemigo1.DEF = enemigo1.DEF - 1;
      enemigo2.DEF = enemigo2.DEF - 1;
      enemigo3.DEF = enemigo3.DEF - 1;
    } else if (enemigo2.HP > 0) {
      enemigo2.HP = enemigo2.HP - (daño * 500) / 100;
      enemigo3.HP = enemigo3.HP - (daño * 500) / 100;
      enemigo2.DEF = enemigo2.DEF - 1;
      enemigo3.DEF = enemigo3.DEF - 1;
    } else if (enemigo3.HP > 0) {
      enemigo3.HP = enemigo3.HP - (daño * 500) / 100;
      enemigo3.DEF = enemigo3.DEF - 1;
    }
  } else alert("¡estamina insuficiente!");
}
function mate() {
  if (estamina >= 5 && cooldownMate <= 5) {
    inmunidad = true;
    sacar_habilidades();
    cooldownMate = 0;
  } else alert("¡estamina insuficiente!");
}
function choripanI() {
  if (estamina >= 10 && cooldownChor <= 7) {
    vidaM = vidaM + (25 * vidaM) / 100;
    cooldownChor = 0;
  } else alert("¡estamina insuficiente!");
}
function choripanII() {
  if (estamina >= 15 && cooldownChor <= 7) {
    vidaM = vidaM + (40 * vidaM) / 100;
    cooldownChor = 0;
  } else alert("¡estamina insuficiente!");
}
function choripanIII() {
  if (estamina >= 15 && cooldownChor <= 7) {
    vidaM = vidaM + (55 * vidaM) / 100;
    cooldownChor = 0;
  } else alert("¡estamina insuficiente!");
}
function cristalMagicoI() {
  if (estamina >= 20 && cooldownChor <= 6) {
    cooldownBomba();
    cooldownChoripan();
    cooldownCuchillo();
    cooldownEmpalar();
    cooldownLanzaCar();
    cooldownLanzaCarLla();
    cooldownMatienzo();
    cooldownTaladro();
    cooldownCris = 0;
  } else alert("¡estamina insuficiente!");
}
function cristalMagicoII() {
  if (estamina >= 25 && cooldownChor <= 6) {
    cristalMagicoI();
    cristalMagicoI();
  } else alert("¡estamina insuficiente!");
}
function cristalMagicoIII() {
  if (estamina >= 30 && cooldownChor <= 6) {
    cristalMagicoII();
    cooldownCris = 0;
  } else alert("¡estamina insuficiente!");
}
function cooldownEmpalar() {
  if (turnoActual === "jugador" && cooldownEMP < 3) {
    cooldownEMP++;
  } else alert("habilidad lista!");
}
function cooldownLanzaCar() {
  if (turnoActual === "jugador" && cooldownLANZ < 1) {
    cooldownLANZ++;
    return cooldownLANZ;
  } else alert("habilidad lista!");
}
function cooldownLanzaCarLla() {
  if (turnoActual === "jugador" && cooldownLLA < 4) {
    cooldownLLA++;
    return cooldownLLA;
  } else alert("habilidad lista!");
}
function cooldownCuchillo() {
  if (turnoActual === "jugador" && cooldownCUC < 5) {
    cooldownCUC++;
    return cooldownCUC;
  } else alert("habilidad lista!");
}
function cooldownBomba() {
  if (turnoActual === "jugador" && cooldownBOM < 7) {
    cooldownBOM++;
    return cooldownBOM;
  } else alert("habilidad lista!");
}
function cooldownTaladro() {
  if (turnoActual === "jugador" && cooldownFinal < 10) {
    cooldownFinal++;
    return cooldownFinal;
  } else alert("habilidad lista!");
}
function cooldownMatienzo() {
  if (turnoActual === "jugador" && cooldownMate < 5) {
    cooldownMate++;
    return cooldownMate;
  } else alert("habilidad lista!");
}
function cooldownChoripan() {
  if (turnoActual === "jugador" && cooldownChor < 7) {
    cooldownChor++;
    return cooldownChor;
  } else alert("habilidad lista!");
}
function cooldownCrisMagico() {
  if (turnoActual === "jugador" && cooldownCris < 4) {
    cooldownCris++;
    return cooldownCris;
  } else alert("habilidad lista!");
}
function dañoMonstruo() {
  
    for (let i = 0; i < enemigos.length; i++) {
    var element = enemigos[i];
    vidaM = vidaM - element.ATK;
    } ;
      if (enemigos[0].habilityI.name== "vampirismo") {
      let vampnum = Math.random();
      if (vampnum <= enemigos[0].habilityI.valor) {
          enemigos[0].HP = enemigos[0].HP + 5;
      } 
    }
    if (enemigos[1].habilityI.name== "vampirismo") {
      let vampnum = Math.random();
      if (vampnum <= enemigos[1].habilityI.valor) {
          enemigos[1].HP = enemigos[1].HP + 5;
    } 
}
    if (enemigos[2].habilityI.name== "vampirismo") {
      let vampnum = Math.random();
      if (vampnum <= enemigos[1].habilityI.valor) {
        enemigos[2].HP = enemigos[2].HP + 5;
    }    
}
    if (enemigos[0].habilityII.name== "quemadura") {
      let quenum = Math.random();
      if (quenum <= enemigos[0].habilityII.valor) {
        enemigos[0].HP = enemigos[0].HP + 5;
    }
  }
    if (enemigos[1].habilityII.name== "quemadura") {
    let quenum = Math.random();
    if (quenum <= enemigos[1].habilityII.valor) {
      enemigos[1].HP = enemigos[1].HP + 5;
  }
}
    if (enemigos[2].habilityII.name== "quemadura") {
  let quenum = Math.random();
  if (quenum <= enemigos[2].habilityII.valor) {
    enemigos[2].HP = enemigos[2].HP + 5;
    }
  }
    if(enemigos[0].habilityII.name == "lentitud") {
      let lennum = Math.random() ;
      if (lennum <= enemigos[0].habilityII.valor) {
      lentitudF();
      }
  }
  if(enemigos[1].habilityII.name == "lentitud") {
    let lennum = Math.random() ;
    if (lennum <= enemigos[1].habilityII.valor) {
    lentitudF();
    }
}
if(enemigos[2].habilityII.name == "lentitud") {
  let lennum = Math.random() ;
  if (lennum <= enemigos[2].habilityII.valor) {
  lentitudF();
  }
}
if(enemigos[0].habilityIII.name == "veneno") {
  let vennum = Math.random() ;
  if (vennum <= enemigos[0].habilityII.valor) {
  vidaM = vidaM -5;
  }
  if(enemigos[1].habilityIII.name == "veneno") {
    let vennum = Math.random() ;
    if (vennum <= enemigos[1].habilityII.valor) {
    vidaM = vidaM -5;
    }
}
if(enemigos[2].habilityIII.name == "veneno") {
  let vennum = Math.random() ;
  if (vennum <= enemigos[2].habilityII.valor) {
  vidaM = vidaM -5;
  }
  turnoActual === "jugador";
} }
  }
  if (turnoActual === "enemigos") {
    dañoMonstruo
  }
    let objetoObtenido = []  ;

function sorteoHabilidades() {
    let h = Math.floor(Math.random() * habilidades.length);
     objetoObtenido.push(habilidades[h]);
    return objetoObtenido
}

for (let p = 0; p < 3; p++) {
sorteoHabilidades() ;  
}
console.log(objetoObtenido) ;
