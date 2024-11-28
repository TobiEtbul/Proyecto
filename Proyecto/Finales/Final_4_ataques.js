const $enemigos = [
    document.getElementById("enemigo1"),
    document.getElementById("enemigo2"),
    document.getElementById("enemigo3"),
];
const enemigos = JSON.parse(localStorage.getItem("enemigos"));

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

function acutalizarBarra(enemigo, barra) {
    let porcentajeVida = (enemigo.HP * 100) / enemigo.HPM;
    barra.style.width = porcentajeVida + "%";
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
        acutalizarBarra(ene[3], barras[0]);
        acutalizarBarra(ene[4], barras[1]);
        acutalizarBarra(ene[5], barras[2]);
    });
});
