import { fork } from "child_process";
import fs, { writeFileSync } from "fs";
let enemigosZ1 = JSON.parse(fs.readFileSync("./JSON/EnemigosZ1.json"));
let enemigosZ2 = JSON.parse(fs.readFileSync("./JSON/EnemigosZ2.json"));
let enemigosZ3 = JSON.parse(fs.readFileSync("./JSON/EnemigosZ3.json"));
let bosses = JSON.parse(fs.readFileSync("./JSON/EnemigosBosses.json"));
let habilidades_act = JSON.parse(fs.readFileSync("./JSON/Habilidades_act.json"));
let habilidades_pas = JSON.parse(fs.readFileSync("./JSON/habilidades_pas.json"));


let dataM = JSON.parse(fs.readFileSync("./JSON/negro.json"));

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
  var enemigos = [];
  var i = Math.floor(Math.random() * enemigosZ1.length);
  var enemigo = enemigosZ1[i];
  enemigos.push(enemigo);
  return enemigo;
}
export function generarEnemigoAleatorioZ2() {
  var enemigos = [];
  var i = Math.floor(Math.random() * enemigosZ2.length);
  var enemigo = enemigosZ2[i];
  enemigos.push(enemigo);
  return enemigo;
}
export function generarEnemigoAleatorioZ3() {
  var enemigos = [];
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
let cooldowns = {
  cooldownEMP: 3,
  cooldownLANZ: 1,
  cooldownsLLA: 4,
  cooldownCUC: 5,
  cooldownBOM: 7,
  cooldownFinal: 10,
  cooldownMate: 5,
  cooldownChor: 7,
  cooldownCris: 6
}

// Función para cambiar de turno
export function cambiarTurno() {
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

export function sacar_habilidades() {
  inmunidad = true;
  if ((inmunidad = true)) {
    fuego = false;
    veneno = false;
    lentitud = false;
  }
}
export function lentitudF() {
  lentitud = true;
  if ((lentitud = true)) {
    cooldowns[0]--;
    cooldowns[8]--;
    cooldowns[7]--;
    cooldowns[6]--;
    cooldowns[5]--;
    cooldowns[4]--;
    cooldowns[3]--;
    cooldowns[2]--;
    cooldowns[1]--;
    lentitud = false;
  }
}
export function fuegoE() {
  fuego = true;
  if ((fuego = true)) {
    HPM = HPM - 5;
  }
}
export function fuego1() {
let fueguito = 0
  if (enemigos[0].fuego == true && fueguito < 3) {
  enemigos[0].HP = enemigos[0].HP - 10;
  fueguito++ ;
} else if (enemigos[0].fuego == true && fueguito >= 3) {
enemigos[0].fuego == false;
fueguito = 0;
}
}
export function fuego2() {
  let fueguito = 0
    if (enemigos[1].fuego == true && fueguito < 3) {
    fueguito++ ;
    enemigos[1].HP = enemigos[1].HP - 10;
  } else if (enemigos[1].fuego == true && fueguito >= 3) {
  enemigos[1].fuego == false;
  }
}
export function fuego3() {
    let fueguito = 0
      if (enemigos[2].fuego == true && fueguito < 3) {
      fueguito++ ;
      enemigos[2].HP = enemigos[2].HP - 10;
    } else if (enemigos[2].fuego == true && fueguito >= 3) {
    enemigos[2].fuego == false;
    }
}
export function golpeJugador() {
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
  return (enemigos);
}
export function empalarI() {
  if (estamina >= 15 && cooldowns[0] <= 3) {
    cooldowns[0] = 0;
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
    return (enemigos);
  } else console.log("¡estamina insuficiente!");

}
export function empalarII() {
  cooldowns[0] = 0;
    if (estamina >= 20 && cooldowns[0] <= 3 && turnoActual == 'jugador') {
      cooldowns[0] = 0;
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
      return (enemigos);

    } else console.log("¡estamina insuficiente!");
}
export function empalarIII() {
  if (estamina >= 25 && cooldowns[0] <= 3 && turnoActual == 'jugador') {
    cooldowns[0] = 0;
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
    return (enemigos);

  } else console.log("¡estamina insuficiente!");
}
export function lanza_carbonI() {
  if (estamina >= 5 && cooldowns[1] <= 1 && turnoActual == 'jugador') {
    cooldowns[1] = 0;
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
    return (enemigos);
  } else console.log("¡estamina insuficiente!");
}
export function lanza_carbonII() {
  cooldowns[1] = 0;
  if (estamina >= 7 && cooldowns[1] <= 1 && turnoActual == 'jugador') {
    cooldowns[1] = 0;
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
    return (enemigos);
  } else console.log("¡estamina insuficiente!");
}
export function lanza_carbonIII() {
  cooldowns[1] = 0;
  if (estamina >= 10 && cooldowns[1] <= 1 && turnoActual == 'jugador') {
    cooldowns[1] = 0;
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
    return (enemigos);
  } else console.log("¡estamina insuficiente!");
}
export function lanza_carbon_llamasI() {
  if (estamina >= 20 && cooldowns[2] <= 4 && turnoActual == 'jugador') {
    cooldowns[2] = 0;
 
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
    return (enemigos);
  } else console.log("¡estamina insuficiente!");
}
export function lanza_carbon_llamasII() {
  if (estamina >= 25 && cooldowns[2] <= 4 && turnoActual == 'jugador') {
    cooldowns[2] = 0;
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
    return (enemigos);
} else console.log("¡estamina insuficiente!");
}
export function lanza_carbon_llamasIII() {
  if (estamina >= 30 && cooldowns[2] <= 4 && turnoActual == 'jugador') {
    cooldowns[2] = 0;
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
    return (enemigos);
  } else console.log("¡estamina insuficiente!");
}
export function cuchillo_venenosoI() {
  if (estamina >= 25 && cooldowns[3] <= 5 && turnoActual == 'jugador') {
    cooldowns[3] = 0;
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
    return (enemigos);

  } else console.log("¡estamina insuficiente!");
}
export function cuchillo_venenosoII() {
  if (estamina >= 30 && cooldowns[3] <= 5 && turnoActual == 'jugador') {
    cooldowns[3] = 0;
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
    return (enemigos);
  } else console.log("¡estamina insuficiente!");
}
export function cuchillo_venenosoIII() {
  if (estamina >= 30 && cooldowns[3] <= 5) {
    cooldowns[3] = 0;
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
    return (enemigos);
  } else console.log("¡estamina insuficiente!");
}
export function bombaI() {
  if (estamina >= 35 && cooldowns[4] <= 7) {
    cooldowns[4] = 0;

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
    return (enemigos);

  } else console.log("¡estamina insuficiente!");
}
export function bombaII() {
  if (estamina >= 45 && cooldowns[4] <= 7) {
    cooldowns[4] = 0;

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
    return (enemigos);

  } else console.log("¡estamina insuficiente!");
}
export function bombaIII() {
  if (estamina >= 60 && cooldowns[4] <= 7) {
    cooldowns[4] = 0;
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
    return (enemigos);

  } else console.log("¡estamina insuficiente!");
}
export function habilidad_final() {
  if (estamina >= 70 && cooldowns[5] <= 10) {
    cooldowns[5] = 0;
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
    return (enemigos);

  } else console.log("¡estamina insuficiente!");
}
export function mate() {
  if (estamina >= 5 && cooldowns[6] <= 5) {
    inmunidad = true;
    sacar_habilidades();
    cooldowns[6] = 0;
    return (inmunidad);

  } else console.log("¡estamina insuficiente!");
}
export function choripanI() {
  if (estamina >= 10 && cooldowns[7] <= 7) {
    vidaM = vidaM + (25 * vidaM) / 100;
    cooldowns[7] = 0;
    return(vidaM);
  } else console.log("¡estamina insuficiente!");
}
export function choripanII() {
  if (estamina >= 15 && cooldowns[7] <= 7) {
    vidaM = vidaM + (40 * vidaM) / 100;
    cooldowns[7] = 0;
    return(vidaM);
  } else console.log("¡estamina insuficiente!");
}
export function choripanIII() {
  if (estamina >= 15 && cooldowns[7] <= 7) {
    vidaM = vidaM + (55 * vidaM) / 100;
    cooldowns[7] = 0;
    return(vidaM);
  } else console.log("¡estamina insuficiente!");
}
export function cristalMagicoI() {
  if (estamina >= 20 && cooldowns[7] <= 6) {
    cooldownBomba();
    cooldownChoripan();
    cooldownCuchillo();
    cooldownEmpalar();
    cooldownLanzaCar();
    cooldownLanzaCarLla();
    cooldownMatienzo();
    cooldownTaladro();
    cooldowns[8] = 0;
  } else console.log("¡estamina insuficiente!");
}
export function cristalMagicoII() {
  if (estamina >= 25 && cooldowns[7] <= 6) {
    cristalMagicoI();
    cristalMagicoI();
    cooldowns[8] = 0;
    return
  } else console.log("¡estamina insuficiente!");
}
export function cristalMagicoIII() {
  if (estamina >= 30 && cooldowns[7] <= 6) {
    cristalMagicoII();
    cristalMagicoI();

    cooldowns[8] = 0;
  } else console.log("¡estamina insuficiente!");
}
export function cooldownEmpalar() {
  if (turnoActual === "jugador" && cooldowns.cooldowns[0] < 3) {
    cooldowns[0]++;
  } else console.log("habilidad lista!");
}
export function cooldownLanzaCar() {
  if (turnoActual === "jugador" && cooldowns[1] < 1) {
    cooldowns[1]++;
    return cooldowns[1];
  } else console.log("habilidad lista!");
}
export function cooldownLanzaCarLla() {
  if (turnoActual === "jugador" && cooldowns[2] < 4) {
    cooldowns[2]++;
    return cooldowns[2];
  } else console.log("habilidad lista!");
}
export function cooldownCuchillo() {
  if (turnoActual === "jugador" && cooldowns[3] < 5) {
    cooldowns[3]++;
    return cooldowns[3];
  } else console.log("habilidad lista!");
}
export function cooldownBomba() {
  if (turnoActual === "jugador" && cooldowns[4] < 7) {
    cooldowns[4]++;
    return cooldowns[4];
  } else console.log("habilidad lista!");
}
export function cooldownTaladro() {
  if (turnoActual === "jugador" && cooldowns[5] < 10) {
    cooldowns[5]++;
    return cooldowns[5];
  } else console.log("habilidad lista!");
}
export function cooldownMatienzo() {
  if (turnoActual === "jugador" && cooldowns[6] < 5) {
    cooldowns[6]++;
    return cooldowns[6];
  } else console.log("habilidad lista!");
}
export function cooldownChoripan() {
  if (turnoActual === "jugador" && cooldowns[7] < 7) {
    cooldowns[7]++;
    return cooldowns[7];
  } else console.log("habilidad lista!");
}
export function cooldownCrisMagico() {
  if (turnoActual === "jugador" && cooldowns[8] < 4) {
    cooldowns[8]++;
    return cooldowns[8];
  } else console.log("habilidad lista!");
}
export function dañoMonstruo() {
  
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

export function sorteoHabilidades() {
    let h = Math.floor(Math.random() * habilidades.length);
     objetoObtenido.push(habilidades[h]);
    return objetoObtenido
}
export function cristalHP() {
  vidaM = vidaM + 20
}
export function cristalDMG() {
  daño = daño + 2
}
export function cristalEST() {
  estamina = estammina + 20
}
export function cristalADMG() {
  areaDMG = areaDMG + 1
}