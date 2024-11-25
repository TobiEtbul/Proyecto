const $enemigos = [
    document.getElementById("enemigo1"),
    document.getElementById("enemigo2"),
    document.getElementById("enemigo3"),
];
const enemigos = JSON.parse(localStorage.getItem("enemigos"));

enemigos.enemigo1["initialVida"] = enemigos.enemigo1.HP;
enemigos.enemigo2["initialVida"] = enemigos.enemigo2.HP;
enemigos.enemigo3["initialVida"] = enemigos.enemigo3.HP;

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

function restarVida( enemigo, ataque, enemigoID) {
    console.log(enemigo);
    

}

function acutalizarBarra(enemigo, barra) {
    let porcentajeVida = enemigo.HP * 100 / enemigo.HPT;
        barra.style.width =
            porcentajeVida + "%";
}

const $golpear = document.getElementById("golpear")
$golpear.addEventListener("click", () => {
    console.log("clicked")
    fetchData("golpear", (enemigos) => {
        console.log(enemigos)
    })
    acutalizarBarra($enemigos[0], barras[0])
    acutalizarBarra($enemigos[1], barras[1])
    acutalizarBarra($enemigos[2], barras[2])
})

barras = [
    document.getElementById("vidaEnemigo1"),
    document.getElementById("vidaEnemigo2"),
    document.getElementById("vidaEnemigo3")
]