const $enemigos = [ 
    document.getElementById("enemigo1"),
    document.getElementById("enemigo2"),
    document.getElementById("enemigo3"),
];
const contenedores = [
    document.querySelector(".cont_ene1"),
    document.querySelector(".cont_ene2"),
    document.querySelector(".cont_ene3"),
];
const enemigos = JSON.parse(localStorage.getItem("enemigos"));
// let enemigos;

$enemigos[0].src =
    "http://localhost:5500/Proyecto/Imagenes/Enemigos/" +
    enemigos.enemigo1.name.toLowerCase() +
    ".png";
$enemigos[1].src =
    "http://localhost:5500/Proyecto/Imagenes/Enemigos/" +
    enemigos.enemigo2.name.toLowerCase() +
    ".png";
$enemigos[2].src =
    "http://localhost:5500/Proyecto/Imagenes/Enemigos/" +
    enemigos.enemigo3.name.toLowerCase() +
    ".png";

function restarVida(enemigo, ataque, enemigoID) {
    console.log(enemigo);
}


function acutalizarBarra(i, enemigo, barra, contenedor) {
    let porcentajeVida = (enemigo.HP * 100) / enemigo.HPM;
    barra.style.width = porcentajeVida + "%";
    if (enemigo.HP <= 0) {
        console.log(`El enemigo ${enemigo.name} ha sido derrotado.`);
        document.getElementById("enemigo"+i).hidden = true;
    }
    if( enemigo1 <= 0 & enemigo2 <= 0 & enemigo3 <= 0 ) {
        window.location.href = 'http://127.0.0.1:5500/Proyecto/Finales/Creditos.html';
    }
}
let vidaM = 150;
const dataM = JSON.parse(localStorage.getItem("dataM"));
const vidaMT = 150;
let barraM = document.getElementById("vidaMinero"); 


function ataqueene (){
    console.log(vidaM);
    ATKE = enemigos.enemigo1.ATK + enemigos.enemigo2.ATK + enemigos.enemigo3.ATK
    console.log(ATKE)
    vidaM = vidaM - ATKE ;
    let porcentajeVidaM = (vidaM * 100) / vidaMT;
    barraM.style.width = porcentajeVidaM + "%";
    console.log(porcentajeVidaM);
    if(vidaM <= 0) {
        document.getElementById("cosasM").hidden = true;
        window.location.href = 'http://127.0.0.1:5500/Proyecto/Finales/Perdiste.html';
    }
}


const barras = [
    document.getElementById("vidaEnemigo1"),
    document.getElementById("vidaEnemigo2"),
    document.getElementById("vidaEnemigo3"),
];
const $golpear = document.getElementById("golpear");
$golpear.addEventListener("click", () => {
    console.log("clicked");
    let ene;
    fetchData("golpear", (enemigos) => {
        ene = enemigos;
        console.log(ene);
        acutalizarBarra(1, ene[0], barras[0]);
        acutalizarBarra(2, ene[1], barras[1]);
        acutalizarBarra(3, ene[2], barras[2]);
        ataqueene();
    });
});
